import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "skaterank.settings")
import django
django.setup()

# your imports, e.g. Django models
from skateboarders.models import Skateboard

# read in names of skateboarders and create/save model instance

# with open('skateboarders.txt') as f:
#     skaters = f.read().splitlines()

# for skater in skaters:
#     print(f'Creating instance for: {skater}')
#     new_skater = Skateboard(name=skater, likes=0, dislikes=0, total=0)
#     new_skater.save()

with open('skateboarders.txt', 'r') as s:
    skater_line = s.readline()
    skater = skater_line.strip('VM3431:1 ').rstrip('\n')
    print(f'Creating instance: {skater}')
    new_skater = Skateboard(name=skater, likes=0, dislikes=0, total=0)
    new_skater.save()
    
    while line:
        skater_line = s.readline()
        skater = skater_line.strip('VM3431:1 ').rstrip('\n')
        print(f'Creating instance: {skater}')
        new_skater = Skateboard(name=skater, likes=0, dislikes=0, total=0)
        new_skater.save()
