from rest_framework import serializers
from .models import *


class serial(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ['amount', 'clientId']
