from rest_framework import serializers
from .models import Book5


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model=Book5
        fields='__all__'