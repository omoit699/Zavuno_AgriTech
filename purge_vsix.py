import subprocess
import sys
import os

os.chdir(r'c:\Users\LORIS E-9 TRADERS\Documents\CAT1 EXAM 2026\Zavuno_Complete_Platform')

print('[1/4] Running git filter-branch...')
try:
    subprocess.check_call([
        'git', 'filter-branch', '--force',
        '--index-filter', 'git rm --cached --ignore-unmatch Zavuno_Complete_Platform/src/*.vsix',
        '--prune-empty', '--tag-name-filter', 'cat', '--', '--all'
    ])
    print('[1/4] DONE')
except subprocess.CalledProcessError as e:
    print(f'[1/4] ERROR: {e}')
    sys.exit(1)

print('[2/4] Expiring reflog...')
try:
    subprocess.check_call(['git', 'reflog', 'expire', '--expire=now', '--all'])
    print('[2/4] DONE')
except subprocess.CalledProcessError as e:
    print(f'[2/4] ERROR: {e}')
    sys.exit(1)

print('[3/4] Running garbage collection...')
try:
    subprocess.check_call(['git', 'gc', '--prune=now', '--aggressive'])
    print('[3/4] DONE')
except subprocess.CalledProcessError as e:
    print(f'[3/4] ERROR: {e}')
    sys.exit(1)

print('[4/4] Verifying VSIX cleanup...')
try:
    result = subprocess.run(['git', 'rev-list', '--objects', '--all'], 
                          capture_output=True, text=True, check=True)
    vsix_count = sum(1 for line in result.stdout.splitlines() if line.lower().endswith('.vsix'))
    print(f'[4/4] Remaining VSIX objects: {vsix_count}')
    if vsix_count == 0:
        print('SUCCESS: All VSIX files removed from history')
    else:
        print(f'WARNING: {vsix_count} VSIX objects still in history')
except subprocess.CalledProcessError as e:
    print(f'[4/4] ERROR: {e}')
    sys.exit(1)
