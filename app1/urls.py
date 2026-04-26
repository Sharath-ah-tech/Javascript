from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('qualifications/', views.qualifications, name='qualifications'),
    path('skills/', views.skills, name='skills'),
    path('certificates/', views.certificate, name='certificates'),
    path('projects/', views.projects, name='projects'),
]