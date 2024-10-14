document.addEventListener('DOMContentLoaded', amountdue);
function updateDateTime() {
    setInterval(function() {
        // Get the current date and time
        const currentDate = new Date();
        
        // Format the date and time as desired (e.g., October 13, 2014 11:13:00)
        const formattedDate = currentDate.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',    // Full month name
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false     // Use 24-hour format
        });

        // Update the button's innerHTML with the formatted date and time
        document.getElementById('datetime').innerHTML = formattedDate;
    }, 1000);  // Update every second
}

// Call the function when the window loads
window.onload = function() {
    updateDateTime();
};

function removebtn(entryId) {
    if (confirm('Are you sure you want to delete this entry?')) {
        fetch(`/delete-entry/${entryId}/`, {
            method: 'DELETE',
            headers: {
                'X-CSRFToken': getCookie('csrftoken'), // Get CSRF token for security
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert('Entry deleted successfully');
                location.reload(); // Reloads the page to see changes
            } else {
                alert('Error deleting entry');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


function amountdue(){
    let balance = parseInt(document.getElementById('amountdue').innerHTML);
    total_amount = balance*2
    document.getElementById('amountdue').innerHTML = total_amount;
    document.getElementById('paybtn').href = `upi://pay?pa=7319187102@okbizaxis&pn=%20&tr=%20&am=${total_amount}&cu=INR` 
}

