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
          Q5: '',
          Q6: [],

        }}
        Qs={[
          {
            qId: 1,
            question: "What is your name?",
            type: 'text'
          }, {
            qId: 2,
            question: "Enter your email address",
            type: 'text'
          },
          {
            qId: 3,
            question: "What programming languages do you know?",
            type: 'multi-select',
            children: (<span className="checkmark" />),
            choices: [
              {
                label: "JavaScript",
                value: "javascript"
              },
              {
                label: "Python",
                value: "python"
              },
              {
                label: "Java",
                value: "java"
              },
              {
                label: "C++",
                value: "c++"
              },
              {
                label: "C#",
                value: "c#"
              },
              {
                label: "Ruby",
                value: "ruby"
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
                <iframe width="560" height="315" src="https://www.youtube.com/embed/PkZNo7MFNFg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            )
          },
          {
            qId: 5,
            type: 'single-choice',
            children: (<span className="checkmark" />),
            question: "What is your favorite language?",
            choices: [
              {
                label: "JavaScript",
                value: "javascript"
              },
              {
                label: "Python",
                value: "python"
              },
              {
                label: "Java",
                value: "java"
              },
              {
                label: "C++",
                value: "c++"
              },
              {
                label: "C#",
                value: "c#"
              },
              {
                label: "Ruby",
                value: "ruby"
              },
            ]
          },

          {
            qId: 6,
            type: 'conditional',
            fallBack: (<div>Whoa JavaScript is Waaaaayyy better!</div>),
            conditions:
            {
              question: 'Q5',
              value: 'javascript'

            },
            qt: 'single-choice',
            question: "What do you like better, JavaScript or Python?",
            children: (<span className="checkmark" />),
            choices: [
              {
                label: "JavaScript",
                value: "javascript"
              },
              {
                label: "Python",
                value: "python"
              }
            ]

          },

        ]}
        onEnd={logEnd}
      />
    </div>
  );
}

export default App;





