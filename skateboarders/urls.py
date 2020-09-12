from .views  import SkateboarderList, SkateboarderUpdate
from django.urls import path, re_path
from django.conf.urls import url

app_name = 'skateboarders'

urlpatterns = [
    path('', SkateboarderList.as_view(), name='skater_list'),
    path('<int:pk>', SkateboarderUpdate.as_view(), name=''),
    

]