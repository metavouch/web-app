# MetaVouch Frontend

This project is a web interface for our decentarlized ticketin application. It interacts with the Ethereum blockchain and IPFS to allow an open and fair trade of event tickets.

## Contributing

Please check the GitHub issues to see if the feature you plan to add is listed. If it is, assign yourself to the issue. If it's not, create a new issue describing what the feature is. From there you may start working on a new branch (`git checkout -b #issue-id`) and merge your code to main, resolving any conflicts.

## Structure

### Home Page

The home page (Explore view) will display events that users can buy tickets for. For now, these will be stored on our backend database. In the future there will be a smart contract dictating who has paid enough to reserve a spot on our front page.

### Event View

From the home page, a user can view an event's details. The event detail page will have a form to purchase tickets, which will connect to MetaMask using the Web3 library to perform the transaction.

### Event Create

From the top menu, the user is brought to a page with a form to create a new event. The form data will upload most of the data to IPFS and then use the ticket amount and price to deploy smart contracts to the blockchain. More info is needed for this section.

### Exchange View

Once the user has connected to their wallet, they can see a list of tickets they own. They are able to sell their own tickets by setting a fixed price in Ethereum.
