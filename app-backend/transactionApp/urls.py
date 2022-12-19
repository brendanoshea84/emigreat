from django.urls import path
from . import views

urlpatterns = [
    path('/transaction', views.transaction),
    path('/newUser/', views.newUser, name="newUser"),
]
