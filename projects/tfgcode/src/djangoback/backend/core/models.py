from django.db import models

# Create your models here.

class React(models.Model):
    name = models.CharField(max_length=30)
    detail = models.CharField(max_length=500)

class Post(models.Model):
    title = models.CharsField(max_length = 200)
    body = models.TextField()

    def _str_(self):
        return f"Post:{self.title}"