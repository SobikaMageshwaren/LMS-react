import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './Assessment.css';

const assessments = {
  1: {
    courseTitle: 'React Fundamentals',
    dueDate: '2025-06-30',
    practicalTask: 'Build a simple React to-do list app with add and delete functionality.',
    questions: [
      {
        question: 'What is JSX?',
        options: ['JavaScript XML', 'Java Syntax', 'JavaScript Extension', 'None of the above'],
        answer: 'JavaScript XML',
      },
      {
        question: 'Which hook is used for managing state?',
        options: ['useEffect', 'useState', 'useContext', 'useReducer'],
        answer: 'useState',
      },
      {
        question: 'How do you pass data between components?',
        options: ['Props', 'State', 'Hooks', 'Reducers'],
        answer: 'Props',
      },
      {
        question: 'What does useEffect do?',
        options: [
          'Runs code after render',
          'Manages component state',
          'Creates new components',
          'None of the above',
        ],
        answer: 'Runs code after render',
      },
      {
        question: 'React components must return what?',
        options: ['A string', 'JSX', 'HTML', 'CSS'],
        answer: 'JSX',
      },
    ],
  },
  2: {
    courseTitle: 'Advanced JavaScript',
    dueDate: '2025-07-05',
    practicalTask: 'Create a small web app demonstrating closures and promises.',
    questions: [
      {
        question: 'What is a closure?',
        options: [
          'A function with preserved scope',
          'A closed loop',
          'A variable',
          'None of the above',
        ],
        answer: 'A function with preserved scope',
      },
      {
        question: 'How do you create a Promise?',
        options: ['new Promise()', 'Promise.create()', 'makePromise()', 'promise()'],
        answer: 'new Promise()',
      },
      {
        question: 'What keyword do you use to pause async functions?',
        options: ['pause', 'await', 'stop', 'wait'],
        answer: 'await',
      },
      {
        question: 'Which method is used to handle fulfilled promises?',
        options: ['then()', 'catch()', 'finally()', 'resolve()'],
        answer: 'then()',
      },
      {
        question: 'What is the output of `typeof NaN`?',
        options: ['number', 'NaN', 'undefined', 'object'],
        answer: 'number',
      },
    ],
  },
  3: {
    courseTitle: 'Web Design Essentials',
    dueDate: '2025-07-10',
    practicalTask: 'Design a responsive webpage using HTML and CSS with a navigation bar and footer.',
    questions: [
      {
        question: 'Which CSS property controls the text size?',
        options: ['font-weight', 'text-size', 'font-size', 'text-style'],
        answer: 'font-size',
      },
      {
        question: 'What does the "flex" property do in CSS?',
        options: ['Controls flexbox behavior', 'Changes font style', 'Sets margins', 'None of the above'],
        answer: 'Controls flexbox behavior',
      },
      {
        question: 'Which tag is used for the main heading in HTML?',
        options: ['<header>', '<h1>', '<head>', '<title>'],
        answer: '<h1>',
      },
      {
        question: 'What does "responsive design" mean?',
        options: [
          'Design that adapts to different screen sizes',
          'Design with fixed pixel width',
          'Design using tables',
          'Design without CSS',
        ],
        answer: 'Design that adapts to different screen sizes',
      },
      {
        question: 'Which HTML attribute is used to link CSS files?',
        options: ['href', 'src', 'link', 'rel'],
        answer: 'href',
      },
    ],
  },
  4: {
    courseTitle: 'Python for Beginners',
    dueDate: '2025-07-15',
    practicalTask: 'Write a Python script that reads a file and counts word frequency.',
    questions: [
      {
        question: 'Which keyword is used to define a function in Python?',
        options: ['def', 'function', 'func', 'define'],
        answer: 'def',
      },
      {
        question: 'What data type is returned by the input() function?',
        options: ['int', 'str', 'float', 'bool'],
        answer: 'str',
      },
      {
        question: 'How do you start a comment in Python?',
        options: ['//', '#', '/*', '<!--'],
        answer: '#',
      },
      {
        question: 'Which of these is a mutable data type?',
        options: ['tuple', 'list', 'str', 'int'],
        answer: 'list',
      },
      {
        question: 'How do you create a virtual environment in Python?',
        options: ['venv', 'virtualenv', 'pipenv', 'All of the above'],
        answer: 'All of the above',
      },
    ],
  },
  5: {
    courseTitle: 'Data Structures in C',
    dueDate: '2025-07-20',
    practicalTask: 'Implement a linked list in C with insert and delete operations.',
    questions: [
      {
        question: 'Which keyword is used to define a structure in C?',
        options: ['struct', 'class', 'define', 'typedef'],
        answer: 'struct',
      },
      {
        question: 'What does malloc() do?',
        options: ['Allocates memory dynamically', 'Frees allocated memory', 'Initializes variables', 'None of the above'],
        answer: 'Allocates memory dynamically',
      },
      {
        question: 'What is the size of int data type on most 32-bit systems?',
        options: ['2 bytes', '4 bytes', '8 bytes', 'Depends on compiler'],
        answer: '4 bytes',
      },
      {
        question: 'Which data structure uses FIFO principle?',
        options: ['Stack', 'Queue', 'Linked List', 'Tree'],
        answer: 'Queue',
      },
      {
        question: 'What is a pointer?',
        options: ['Variable that stores address', 'Variable that stores data', 'Function', 'None of the above'],
        answer: 'Variable that stores address',
      },
    ],
  },
  6: {
    courseTitle: 'MongoDB Basics',
    dueDate: '2025-07-25',
    practicalTask: 'Create a MongoDB collection and perform CRUD operations using Mongo Shell or Compass.',
    questions: [
      {
        question: 'What type of database is MongoDB?',
        options: ['Relational', 'NoSQL document store', 'Key-value store', 'Graph database'],
        answer: 'NoSQL document store',
      },
      {
        question: 'Which command inserts a document into a collection?',
        options: ['db.collection.insert()', 'db.collection.add()', 'db.insert()', 'insert()'],
        answer: 'db.collection.insert()',
      },
      {
        question: 'Which operator is used for querying fields in MongoDB?',
        options: ['$', '?', '#', '&'],
        answer: '$',
      },
      {
        question: 'What format does MongoDB use to store data?',
        options: ['JSON', 'XML', 'BSON', 'YAML'],
        answer: 'BSON',
      },
      {
        question: 'How do you update a document in MongoDB?',
        options: ['db.collection.updateOne()', 'db.collection.modify()', 'db.update()', 'update()'],
        answer: 'db.collection.updateOne()',
      },
    ],
  },
  7: {
    courseTitle: 'Machine Learning Intro',
    dueDate: '2025-07-30',
    practicalTask: 'Build a simple linear regression model using a dataset of your choice.',
    questions: [
      {
        question: 'What type of learning is supervised learning?',
        options: ['Learning with labeled data', 'Learning without labeled data', 'Reinforcement learning', 'Unsupervised learning'],
        answer: 'Learning with labeled data',
      },
      {
        question: 'Which algorithm is used for classification?',
        options: ['Linear Regression', 'Decision Tree', 'K-Means', 'PCA'],
        answer: 'Decision Tree',
      },
      {
        question: 'What is overfitting?',
        options: [
          'Model performs well on training but poorly on test data',
          'Model performs well on test data',
          'Data is noisy',
          'None of the above',
        ],
        answer: 'Model performs well on training but poorly on test data',
      },
      {
        question: 'Which metric is used for regression evaluation?',
        options: ['Accuracy', 'Mean Squared Error', 'Recall', 'Precision'],
        answer: 'Mean Squared Error',
      },
      {
        question: 'What does the train-test split do?',
        options: [
          'Splits data into training and testing sets',
          'Normalizes data',
          'Removes outliers',
          'Balances classes',
        ],
        answer: 'Splits data into training and testing sets',
      },
    ],
  },
  8: {
    courseTitle: 'Git & GitHub Essentials',
    dueDate: '2025-08-05',
    practicalTask: 'Initialize a Git repository, commit changes, and push to GitHub.',
    questions: [
      {
        question: 'Which command initializes a new Git repository?',
        options: ['git init', 'git start', 'git new', 'git create'],
        answer: 'git init',
      },
      {
        question: 'How do you check the status of your working directory?',
        options: ['git status', 'git check', 'git log', 'git diff'],
        answer: 'git status',
      },
      {
        question: 'Which command stages changes for commit?',
        options: ['git add', 'git commit', 'git push', 'git stage'],
        answer: 'git add',
      },
      {
        question: 'What is a pull request?',
        options: [
          'A request to merge changes',
          'A command to fetch updates',
          'A Git branch',
          'None of the above',
        ],
        answer: 'A request to merge changes',
      },
      {
        question: 'Which command downloads changes from remote?',
        options: ['git pull', 'git fetch', 'git clone', 'git merge'],
        answer: 'git pull',
      },
    ],
  },
};

export default function Assessment() {
  const { courseId } = useParams();
  const assessment = assessments[courseId];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  if (!assessment) return <p>Assessment not found.</p>;

  const handleOptionChange = (qIndex, option) => {
    setSelectedAnswers({ ...selectedAnswers, [qIndex]: option });
  };

  const handleSubmit = () => {
    let points = 0;
    assessment.questions.forEach((q, i) => {
      if (selectedAnswers[i] === q.answer) points++;
    });
    setScore(points);
    setSubmitted(true);
  };

  return (
    <div className="assessment-container">
      <h2>{assessment.courseTitle} - Assessment</h2>
      <p><strong>Due Date:</strong> {assessment.dueDate}</p>

      <h3>Practical Task</h3>
      <p>{assessment.practicalTask}</p>

      <h3>Quiz Questions</h3>
      {assessment.questions.map((q, i) => (
        <div key={i} className="question-block">
          <p><strong>Q{i + 1}: {q.question}</strong></p>
          {q.options.map((option, j) => (
            <label key={j} className="option-label">
              <input
                type="radio"
                name={`question-${i}`}
                value={option}
                onChange={() => handleOptionChange(i, option)}
                disabled={submitted}
              />
              {option}
            </label>
          ))}
        </div>
      ))}

      {!submitted ? (
        <button className="submit-btn" onClick={handleSubmit}>Submit Quiz</button>
      ) : (
        <div className="result">
          <h3>Your Quiz Score: {score} / {assessment.questions.length}</h3>
          <p>Please complete the practical task and submit it by the due date.</p>
        </div>
      )}
    </div>
  );
}
