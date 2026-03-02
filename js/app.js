const App = {
    // All of our selected HTML elements
    $: {
        menu: document.querySelector('[data-id="menu"]'),
        menuItems: document.querySelector('[data-id="menu-items"]'),
        resetBtn: document.querySelector('[data-id="reset-btn"]'),
        newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
        squares: document.querySelectorAll('[data-id="square"]'),
    },

    init() {
        App.registerEventListeners()
    },

    registerEventListeners() {

        // Toggling the menu
        App.$.menu.addEventListener("click", event => {
    App.$.menuItems.classList.toggle("hidden");
        });

        // Reseting the game
        App.$.resetBtn.addEventListener("click", event => {
            console.log("Reset the game")
        });

        // Starting a new round
        App.$.newRoundBtn.addEventListener("click", event => {
            console.log("New round started")
        });

        App.$.squares.forEach(square => {
            square.addEventListener('click', event => {
                // To use interpolation (ie. ${event.target.id}), use the backticks(`) instead of apostrophes(')
                console.log(`Square with id ${event.target.id} 'was clicked`);
            });
        });
    }
};

window.addEventListener("load", App.init);

// https://developer.mozilla.org/en-US/
// Listen for the click listener, and then add/remove the hidden class for the dropdown menu in the HTML
// The toggle() method of the DOMTokenList interface removes an existing token from the list and returns false. If the token doesn't exist it's added and the function returns true
