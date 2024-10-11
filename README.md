# implemented the search bar functionality
 - Here i implemented the funcitonality to make a


# Implemented Debouncing inside my search suggestion api call
   - When i make the api call to the search suggestion endpoint, i debounce the api such that it will only be called 2ms after i don't type anything. This is to prevent api call for every keystroke in the search bar.
   - I make Api call after every key stroke, but if the difference in time between two api calls is less than 2ms, decline the api call
