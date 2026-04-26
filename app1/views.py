from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def index(request):
    return render(request, 'index.html')
def about(request):
    return render(request, 'about.html')
def qualifications(request):
    return render(request, 'qualifications.html')
def skills(request):
    return render(request,'skills.html')
def certificate(request):
    return render(request, 'certificates.html')
def projects(request):
    return render(request, 'projects.html')