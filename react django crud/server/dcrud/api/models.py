from django.db import models

# Create your models here.

class Book5(models.Model):
    title=models.CharField(max_length=50)
    releaseYear=models.IntegerField()


    def __str__(self) :
        return self.title