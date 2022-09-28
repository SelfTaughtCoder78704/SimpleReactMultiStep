import Quiz from './components/Quiz';
import './App.css';


function App() {

  const logEnd = (answers) => {
    console.log(answers)


    for (let key in answers) {
      if (Array.isArray(answers[key])) {
        console.log(`${key}: ${answers[key].join(', ')}`);
      } else {
        console.log(`${key}: ${answers[key]}`);
      }
    }


  }
  return (
    <div className="App">
      <Quiz
        As={{
          Q1: "",
          Q2: "",
          Q3: [],
          Q5: [],
          Q6: [],
          Q7: [],
          Q8: []
        }}
        Qs={[
          {
            qId: 1,
            question: "What is the capital of France?",
            type: 'text'
          }, {
            qId: 2,
            question: "What is the capital of Texas?",
            type: 'text'
          },
          {
            qId: 3,
            question: "What do you like?",
            type: 'multi-select',
            children: (<span className="checkmark" />),
            choices: [
              {
                label: "I like apples",
                value: "apples"
              },
              {
                label: "I like oranges",
                value: "oranges"
              },
            ]
          },
          {
            qId: 4,
            type: 'interstitial',
            component: (
              <div>
                <h2>TAKE A BREAK</h2>
                <p>Enjoy the view:</p>
                <img src="https://media.giphy.com/media/3o7TKsQ8UQ0MgVJhWU/giphy.gif" alt="take a break" />
              </div>

            )
          },
          {
            qId: 5,
            type: 'single-choice',
            children: (<span className="checkmark" />),
            question: "What is your favorite food?",
            choices: [
              {
                label: "Spaghetti",
                value: "spaghetti"
              },
              {
                label: "Pizza",
                value: "pizza"
              },
              {
                label: "Tacos",
                value: "tacos"
              }
            ]
          },
          {
            qId: 6,
            type: 'multi-select',
            question: "Which colors do you like?",
            children: (<span className="checkmark" />),
            choices: [
              {
                label: "Red",
                value: "red"
              },
              {
                label: "Blue",
                value: "blue"
              },
              {
                label: "Green",
                value: "green"
              }
            ]
          },
          {
            qId: 7,
            type: 'conditional',
            fallBack: (<div>Sorry, you don't like red or blue</div>),
            conditions:
            {
              question: 'Q6',
              value: ['red', 'blue']

            },
            qt: 'single-choice',
            question: "What do you like better, red or blue?",
            children: (<span className="checkmark" />),
            choices: [
              {
                label: "Red",
                value: "red"
              },
              {
                label: "Blue",
                value: "blue"
              }
            ]

          },

          {
            qId: 8,
            type: 'conditional',
            qt: 'multi-select',
            fallBack: (<div>Sorry, you don't like pizza</div>),
            conditions:
            {
              question: 'Q5',
              value: ['pizza']
            },
            question: "What is your favorite pizza topping?",
            children: (<span className="checkmark" />),
            choices: [
              {
                label: "Pepperoni",
                value: "pepperoni"
              },
              {
                label: "Mushrooms",
                value: "mushrooms"
              },
              {
                label: "Olives",
                value: "olives"
              }
            ]
          }
        ]}
        onEnd={logEnd}
      />
    </div>
  );
}

export default App;



