# Quiz Starter React

## Includes the following:

- Quiz Component
- InputField Component
- Interstitial Component
- SingleChoice Component
- MultiSelect Component

Quiz needs 2 props:
As and Qs

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

## Notice taht Q4 is not included in the As object.

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
  ]}
/>
```

See App.js for a working example.
