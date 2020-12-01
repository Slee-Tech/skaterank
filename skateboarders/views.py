from django.shortcuts import render
from .models import Skateboard
from .serializers import SkateboardSerializer
from rest_framework import generics, mixins
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json

# Create your views here.
class SkateboarderList(mixins.ListModelMixin, generics.GenericAPIView):
    serializer_class = SkateboardSerializer
    queryset = Skateboard.objects.all().order_by('name')

    def get(self, request, *args, **kwargs):
        return self.list(self, request, *args, **kwargs)

class SkateboarderUpdate(APIView):
    def get_object(self, pk):
        try:
            return Skateboard.objects.get(pk=pk)
        except Skateboard.DoesNotExist:
            raise Http404
    
    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = SkateboardSerializer(snippet)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        skater = self.get_object(pk)
        like_or_dislike_json = json.loads(request.body.decode("utf-8"))
        print(like_or_dislike_json)
        like_or_dislike = like_or_dislike_json["opinion"]
        if like_or_dislike == 'like':
            skater.likes += 1
            skater.total += 1
        else:
            skater.dislikes += 1
            skater.total += 1
        skater.save()
        # serializer = SkateboardSerializer(skater, data=skater)
        # if serializer.is_valid():
        #     serializer.save()
        return Response("Liked skater") # changed message if dislike
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class StanceUpdate(APIView):
    def get_object(self, pk):
        return Skateboard.objects.get(pk=pk)

    def patch(self, request, pk):
        skater = self.get_object(pk)
        stance_json = json.loads(request.body.decode("utf-8"))
        stance = stance_json["stance"]
        skater.stance = stance
        skater.save()
        # serializer = SkateboardSerializer(skater, data=skater)
        # if serializer.is_valid():
        #     serializer.save()
        return Response(f"Set Stance to {stance}") # changed message if dislike
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)