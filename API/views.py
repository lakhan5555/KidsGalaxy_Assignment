from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response 

from .serializers import TaskSerializer
from .models import task


@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'list': '/task-list/',
        'Detail View': '/task-detail/<str:pk>/',
        'Create': '/task-create/',
        'Update': '/task-update/<str:pk>/',
        'Delete': '/task-delete/<str:pk>/'
    }
    return Response(api_urls)


@api_view(['GET'])
def TaskList(request):
    tasks = task.objects.all().order_by('-id')
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)



@api_view(['GET'])
def TaskDetail(request,pk):
    task1 = task.objects.get(id=pk)
    serializer = TaskSerializer(task1, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def TaskCreate(request):
    serializer = TaskSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['PUT'])
def TaskUpdate(request, pk):
    task1 = task.objects.get(id=pk)
    serializer = TaskSerializer(instance = task1, data = request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['DELETE'])
def TaskDelete(request, pk):
    task1 = task.objects.get(id=pk)
    task1.delete()
    return Response("Item succesfully Deleted")

