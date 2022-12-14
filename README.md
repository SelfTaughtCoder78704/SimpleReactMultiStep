# Quiz Starter React

## Includes the following:

- Quiz Component
- InputField Component
- Interstitial Component
- SingleChoice Component
- MultiSelect Component
- QuestionBasedOnPreviousAnswer Component

Quiz needs 3 props:
As and Qs, and onEnd

As looks like this:

```js
{Q1: "",Q2: "", Q3: [], Q5: "", Q6: [],}
```

- If the answer is from an InputField, it will be a string. If it is from a SingleChoice or MultiSelect, it will be an array.
- If you are using and Interstitial, it can be skipped -- Notice that Q4 doesn't exist in the example above.

Example from above continued with a six part quiz with Q4 being an Interstitial:

- Get Your As in place:

```jsx
<Quiz As={
  {Q1: "",Q2: "", Q3: [], Q5: "", Q6: [],}
}>
```

## Notice that Q4 is not included in the As object.

- Get your Qs in place:

```jsx
<Quiz
  As={{ Q1: "", Q2: "", Q3: [], Q5: "", Q6: [] }}
  Qs={[
    {
      qId: 1,
      question: "What is the capital of France?",
      type: "text",
    },
    {
      qId: 2,
      question: "What is the capital of Texas?",
      type: "text",
    },
    {
      qId: 3,
      question: "What do you like?",
      type: "multi-select",
      children: <span className="checkmark" />,
      choices: [
        {
          label: "I like apples",
          value: "apples",
        },
        {
          label: "I like oranges",
          value: "oranges",
        },
      ],
    },
    {
      qId: 4,
      type: "interstitial",
      component: (
        <div>
          <h2>TAKE A BREAK</h2>
          <p>Enjoy the view:</p>
          <img
            src="https://media.giphy.com/media/3o7TKsQ8UQ0MgVJhWU/giphy.gif"
            alt="take a break"
          />
        </div>
      ),
    },
    {
      qId: 5,
      type: "single-choice",
      children: <span className="checkmark" />,
      question: "What is your favorite food?",
      choices: [
        {
          label: "Spaghetti",
          value: "spaghetti",
        },
        {
          label: "Pizza",
          value: "pizza",
        },
        {
          label: "Tacos",
          value: "tacos",
        },
      ],
    },
    {
      qId: 6,
      type: "multi-select",
      question: "Which colors do you like?",
      children: <span className="checkmark" />,
      choices: [
        {
          label: "Red",
          value: "red",
        },
        {
          label: "Blue",
          value: "blue",
        },
        {
          label: "Green",
          value: "green",
        },
      ],
    },
    {
      qId: 7,
      type: "conditional",
      qt: "multi-select",
      fallBack: <div>Sorry, you don't like pizza</div>,
      conditions: {
        question: "Q5",
        value: ["pizza"],
      },
      question: "What is your favorite pizza topping?",
      children: <span className="checkmark" />,
      choices: [
        {
          label: "Pepperoni",
          value: "pepperoni",
        },
        {
          label: "Mushrooms",
          value: "mushrooms",
        },
        {
          label: "Olives",
          value: "olives",
        },
      ],
    },
  ]}
  onEnd={logEnd}
/>
```

## The meat and potatoes is in the onEnd prop that should be a function. It is passed answers. So you can create the function in the outer scope something like this:

```js
const logEnd = (answers) => {
  console.log(answers);

  for (let key in answers) {
    if (Array.isArray(answers[key])) {
      console.log(`${key}: ${answers[key].join(", ")}`);
    } else {
      console.log(`${key}: ${answers[key]}`);
    }
  }
};
```

## This is a function you will create in the Parent scope. It will be passed to the Quiz component as a prop. It will be called when the user clicks the submit button. It will receive the answers object as an argument. You can do whatever you want with it. In this example, we are just logging it to the console.

Qs is an array of objects. Each object represents a question. Each question has a qId, question, type, and children. If the question is a multi-select or single-choice, it will also have choices. If the question is an interstitial, it will have a component. As need to have a Q{number} for each key in Qs. Example: Q1, Q2, Q3, Q4, Q5, Q6.

demo:
https://simple-react-multistep.netlify.app/

- See App.js for a working example.
