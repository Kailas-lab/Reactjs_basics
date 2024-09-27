from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Book5
from .serializer import BookSerializer

@api_view(['GET'])
def get_books(request):
    books=Book5.objects.all()
    serializedData=BookSerializer(books,many=True).data
    return Response(serializedData)


@api_view(['POST'])
def create_books(request):
    data = request.data
    serializer = BookSerializer(data=data)
    
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT', 'DELETE'])
def book_details(request, pk):
    try:
        book = Book5.objects.get(pk=pk)
    except Book5.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'DELETE':
        book.delete()  # Corrected the method to delete the specific book instance
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    elif request.method == 'PUT':
        data = request.data
        serializer = BookSerializer(book,data=data)
    
        if serializer.is_valid():
           serializer.save()
           return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


   



