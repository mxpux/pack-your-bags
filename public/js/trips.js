// Show the add trip page
$("#add-trip-button").click(function () {
    document.location.replace('/trip/add');
});

// Delete the trip
$("#delete-confirmation-button").click(async function () {
    $('#confirmDeleteTripModal').modal('toggle');
    // Delete the trip
    // Get the ID for the trip from the route
    var urlComponents = window.location.href.split('/');
    var tripId = urlComponents[urlComponents.length - 1];
    const response = await fetch('/trip/' + tripId, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // Show the trip page
        document.location.replace('/trip');
    } else {
        alert('Failed to delete trip.');
    }
});

// Add a sign out
$("#sign-out-button").click(async function () {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // Show the home page
        document.location.replace('/');
    } else {
        alert('Failed to log out');
    }

$(document).on("click", ".trip", function () {
    var tripId = $(this).attr("data-trip-id");
    document.location.replace('/trip/' + tripId);
});