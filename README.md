# `flickcritic.`

## `Description:`

"flickcritic." provides users an opportunity to choose a movie out of a series of movies and then write their own thoughts about the movie to share with other users on "flickcritic." Users also have the ability to edit and delete their reviews manipulating the API. What makes "flickcritic." unique and fun is that users' reviews are displayed in a style similar to reviews displayed by acclaimed movie critics so that the user can feel like an accredited film critic.

### `Technologies Used:`

HTML/CSS/JS/React/Node/MongoDB/Express/Bootstrap

### `Installation Instructions:`

1. Fork and clone this repository.
1. Change into the new directory and create a development branch to work on.

### `Component Hierarchy:`
![](https://user-images.githubusercontent.com/65630204/90814803-a61ded00-e2f7-11ea-9871-1ee67c4251c0.png)



### `Favorite Function:`
```javascript
handleSubmit = (event) => {
        event.preventDefault();
		//pushing a new object of the new review and datePosted
		axios
			.post(`${url}/${this.props.movie._id}`, this.state)
			.then((res) => {
				window.location.reload()
			})
	};
```
When a user clicks on the submit button to submit a review, the handleSubmit method is invoked and in that method, We pass in the new review and the current date which the handleChange method stores in the state of  the Form component along with the current date. A post request is made with axios to the reviews endpoint to add a new review, when that request has been fulfilled, the page is then reloaded.

### `Roadmap:`
- additional styling
- adding links to images to purchase movies
- adding links to trailer of the movie
- login/authentication

### `Contributors`
- IMDB
- https://momentjs.com/
