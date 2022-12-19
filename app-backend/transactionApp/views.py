from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from datetime import datetime
from .serializer import *

# Create your views here.


@api_view(['POST', "GET"])
def transaction(request):
    print("get is working line 15 views")
    if request.method == "GET":
        print("get is working line 15 views")
        data = Client.objects.all()
        serializer = serial(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == "POST":
        data = request.data
        transation = TransactionHistory.objects.create(
            idTo=data.idTo,
            idFrom=data.idFrom,
            amount=data.amount,
            dateTime=datetime.now()
        )
        transation.save()

        client = Client.objects.get(id=data.idFrom)
        client.amount = (client.amount - data.amount)
        client.save()
        return Response()

    return Response()


# Creat a new user with starting amount
@api_view(['POST'])
def newUser(request):
    print("line 41")
    if request.method == "POST":
        data = request.data
        client = Client.objects.create(
            amount=data.startingAmount,
        )
        client.save()

        return Response()


# Change user
def changeUser(request):
    return Response()
