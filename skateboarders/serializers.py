from rest_framework import serializers
from .models import Skateboard

class SkateboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skateboard
        fields = (
            'id','name', 'likes', 'dislikes', 'total'
        )

