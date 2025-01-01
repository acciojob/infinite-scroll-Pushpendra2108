//your code here!
  const infiList = document.getElementById('infi-list');
        let itemCount = 0;  // Keep track of the total number of items

        // Function to generate list items
        function generateListItems(count) {
            for (let i = 1; i <= count; i++) {
                itemCount++;
                const li = document.createElement('li');
                li.textContent = `Item ${itemCount}`;
                infiList.appendChild(li);
            }
        }

        // Initially load 10 items
        generateListItems(10);

        // Function to check if the user has scrolled to the bottom
        function checkScroll() {
            // If scrolled to the bottom of the list, load 2 more items
            if (infiList.scrollHeight - infiList.scrollTop === infiList.clientHeight) {
                generateListItems(2);
            }
        }

        // Add scroll event listener
        infiList.addEventListener('scroll', checkScroll);

