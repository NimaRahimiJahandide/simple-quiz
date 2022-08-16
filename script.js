const quizForm = document.getElementById('quizForm');
const mysubmit = document.querySelector('button');

const questions = [
  {
    id: 1,
    title:
      'برای اینکه لینک در صفحه یا تب جدید باز شود، از کدام صفت استفاده میشود؟',
    options: [
      {
        key: 1,
        title: '_blank'
      },
      {
        key: 2,
        title: '_self'
      },
      {
        key: 3,
        title: '_new'
      },
      {
        key: 4,
        title: '_parent'
      }
    ],
    answerKey: 1
  },
  {
    id: 2,
    title:
      'کدام عملگر true برمیگرداند اگر دو مقداری که با هم مقایسه میشوند، برابر نباشند؟',
    options: [
      {
        key: 1,
        title: '<>'
      },
      {
        key: 2,
        title: '~'
      },
      {
        key: 3,
        title: '==!'
      },
      {
        key: 4,
        title: '!=='
      }
    ],
    answerKey: 4
  },
  {
    id: 3,
    title: 'کدام یک کلمه کلیدی در جاوااسکریپت نیست؟',
    options: [
      {
        key: 1,
        title: 'this'
      },
      {
        key: 2,
        title: 'catch'
      },
      {
        key: 3,
        title: 'function'
      },
      {
        key: 4,
        title: 'array'
      }
    ],
    answerKey: 4
  },
  {
    id: 4,
    title:
      'کدام یک راه درست برای اینکه تعداد پاراگراف‌های موجود در صفحه را بدست بیاوریم با استفاده از jquery است؟',
    options: [
      {
        key: 1,
        title: '$("p").count()'
      },
      {
        key: 2,
        title: '$("p").length'
      },
      {
        key: 3,
        title: '$("*").find("p")'
      },
      {
        key: 4,
        title: '$("p").length()'
      }
    ],
    answerKey: 2
  }
];

const questionsHtml = questions.map(question => {
  return `
  <div class="question">
    <h3>${question.title}</h3>
    <div class="choices">
    ${question.options.map(option => `
      <div class="choice">
        <label for="choice${question.id}${option.key}">${option.title}</label>
        <input type="radio" name="${question.id}" id="choice${question.id}${option.key}" value="${option.key}" />
      </div>
      `).join('')}
    </div>
  </div>
  `;
});

const submitHtml = `<button type="submit">ثبت</button>`

quizForm.innerHTML = questionsHtml.join('');
quizForm.innerHTML += submitHtml; 

$("Form").submit(function(event) {
  event.preventDefault();

  let rightAnswer = 0;
  let wrongAnswer = 0;
  let emptyAnswers = 0;

  questions.forEach(question => {
    const answer = $('input[name=' + question.id + ']:checked').val();
    if (answer) {
      if (answer == question.answerKey) {
        rightAnswer++;
      } else {
        wrongAnswer++;
      }
    } else {
      emptyAnswers++;
    }
    console.log(answer);
  });


  $('#rightAnswers').html(rightAnswer);
  $('#wrongAnswers').html(wrongAnswer);
  $('#emptyAnswers').html(emptyAnswers);
});