from django.shortcuts import render
from .models import dueBalance,pickups
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


def home(request):
    balance = dueBalance.objects.first()  # Get the first entry
    return render(request, 'index.html', {'balance': balance.due if balance else 0})

def pickup_entries(request):
    pickups_obj = pickups.objects.all() 
    return render(request,'pickups.html',{'pickups':pickups_obj})

def delete_entry(request, entry_id):
    if request.method == "DELETE":
        try:
            entry = pickups.objects.get(id=entry_id)
            entry.delete()
            return JsonResponse({"message": "Entry deleted successfully"}, status=204)
        except pickups.DoesNotExist:
            return JsonResponse({"error": "Entry not found"}, status=404)
        
