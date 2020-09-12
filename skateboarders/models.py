from django.db import models

# Create your models here.
class Skateboard(models.Model):
    name = models.CharField(max_length=255)
    likes = models.IntegerField()
    dislikes = models.IntegerField()
    total = models.IntegerField()

