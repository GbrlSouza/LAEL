new Vue({
    el: '#app',
    data: {
        codeExample: `
component HelloWorld:
    props:
        name: str = "World"

    template:
        """
        <div>
            <h1>Hello, {{ name }}!</h1>
            <p>Bem-vindo à LAEL, a linguagem que une simplicidade e poder!</p>
        </div>
        """
        `,
        faqs: [
            { question: "Como instalo LAEL?", answer: "Você pode instalar LAEL seguindo a documentação oficial disponível no GitHub." },
            { question: "LAEL é adequada para projetos grandes?", answer: "Sim, LAEL suporta modularidade e escalabilidade, sendo ideal tanto para projetos pequenos quanto grandes." },
            { question: "Posso usar pacotes Python com LAEL?", answer: "Sim! LAEL é compatível com pacotes Python populares, como NumPy e Pandas." }
        ]
    },
    methods: {
        runCode() {
            alert('Executando código LAEL!');
        }
    }
});
