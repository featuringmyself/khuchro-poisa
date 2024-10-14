from django.db import models
from django.utils import timezone

class dueBalance(models.Model):
    due = models.IntegerField()

    def __str__(self):
        return str(self.due)
    
class pickups(models.Model):
    date_added = models.DateTimeField(default=timezone.now)
    name = models.CharField(default='', max_length=27)
    parcels = models.IntegerField()