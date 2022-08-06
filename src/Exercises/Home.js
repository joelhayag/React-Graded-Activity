const Home = () => {

  return (
    <div className="text-left">
      <h1 className="mt-5">B13 - React Graded Activity</h1>
      <p>
        Create a React Application with the following specifications and submit your Github Repository link.
      </p>
      <img src="https://nexax.in/wp-content/uploads/2020/11/giphy.gif"></img>

      <div>
        <h3>0. React Routing</h3>
        <p>
          Using the React Router, create individual component pages for each exercise.
        </p>
        <img src="https://kodego.instructure.com/courses/116/files/7126/preview"></img>
      </div>

      <div>
        <h3>1. Event Handling</h3>
        <p>
          Using the native HTML
          <code>
            &lt;button&gt;
          </code>
          tag, capture the click event and alert the message, "Clicked!".
        </p>
        <strong>
          Take note that capturing events such as clicks is done differently in React than it is in JavaScript.
        </strong>
        <img src="https://media.giphy.com/media/QseBpgmWRAUrgpxtGj/source.gif"></img>
      </div>

      <div>
        <h3>2. Custom Component</h3>
        <p>
          Build your own Button component and render it three times. On user click, it should alert which button was clicked:
        </p>
        <img src="https://media.giphy.com/media/4C72sQTzuysQ71m8sw/source.gif"></img>
      </div>

      <div>
        <h3>3. State and Props</h3>
        <p>
          Use the &nbsp;
          <code>
            useState
          </code>&nbsp;
                                                                                                                                                                                                                                      React hook to track how many times a button is clicked, and display the number.
        </p>
        <p>
          The number must increment each time the button is clicked:
        </p>
        <img src="https://media.giphy.com/media/My670LXjzJvHTgcjU3/source.gif"></img>
      </div>

      <div>
        <h3>4. Mapping Through a List and Rendering</h3>
        <p>
          Given an array: &nbsp;
        </p>
        <p>
          <code>
            ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
          </code>
        </p>
        <p>
          &nbsp; Use the map function to render them in an unordered list:
        </p>
        <ul>
          <li>dog</li>
          <li>cat</li>
          <li>chicken</li>
          <li>cow</li>
          <li>horse</li>
        </ul>
      </div>

      <div>
        <h3>5. Mapping Through a List and Rendering (With a Custom Component)</h3>
        <p>
          This time, you'll create a custom component that displays each item from exercise 4: &nbsp;
        </p>
        <p>
          <code>
            ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
          </code>
        </p>
        <p>
          &nbsp; Instead of using the &nbsp;
          <code>&lt;ul&gt;</code>
          &nbsp; and &nbsp;
          <code>&lt;li&gt;</code>
          &nbsp; HTML tags, create a custom component that accepts a list as its prop, and renders it accordingly.
        </p>
        <img src="https://coderfiles.dev/static/ac33f6d2673177e812df7d2088d65fa3/fdec0/ex6b.jpg"></img>
      </div>


      <div>
        <h3>6. Building a Form</h3>
        <p>
          Build a form that accepts a first name and a last name. Make a button that says "Greet Me" that when clicked, will alert "Hello [first name] [last name]!".
        </p>

        <img src="https://media.giphy.com/media/JtjlF8GzLQZrJnu1st/source.gif"></img>
      </div>


    </div>
  )
};

export default Home;
