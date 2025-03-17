const { createApp } = Vue;

createApp({
    data() {
        return {
            questions: [
                { text: '1. Рано или поздно вы услышите от кого-нибудь, что вы талант', value: 95 },
                { text: '2. Вы выглядите моложе своих лет', value: 80 },
                { text: '3. Вы замечательно проведете свой следующий отпуск', value: 80 },
                { text: '4. Неожиданно вы получите приличную сумму денег и сможете потратить их только на себя', value: 70 },
                { text: '5. Хоть одна ваша мечта непременно сбудется', value: 100 },
                { text: '6. В семье сохранятся хорошие отношения', value: 95 },
                { text: '7. Наконец-то приедет друг, с которым вы давно потеряли связь', value: 10 },
                { text: '8. Ваши достижения вызовут всеобщее восхищение', value: 100 }
            ],
            totalScore: null,
            userType: ''
        };
    },
    methods: {
        calculateScore() {
            const sum = this.questions.reduce((acc, question) => acc + parseInt(question.value), 0);
            this.totalScore = sum / this.questions.length;

            if (this.totalScore <= 45) {
                this.userType = 'неудачливый';
            } else if (this.totalScore <= 74) {
                this.userType = 'нейтральный';
            } else {
                this.userType = 'удачливый';
            }
        }
    }
}).mount('#app');