import uuid
from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Client(models.Model):
    amount = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True, default=100)


class TransactionHistory(models.Model):
    idTo = models.CharField(id, blank=False, null=False,
                            editable=False, max_length=10)
    idFrom = models.CharField(
        id, blank=False, null=False, editable=False, max_length=10)
    dateTime = models.DateTimeField(auto_now_add=True)
    amount = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
