new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data() {
    return {
      features: [
        { icon: 'mdi-code-tags', title: 'Sintaxe Simples', description: 'Baseada em Python para uma curva de aprendizado rápida.' },
        { icon: 'mdi-react', title: 'Reatividade', description: 'A UI se atualiza automaticamente com mudanças de estado.' },
        { icon: 'mdi-puzzle', title: 'Componentes Modulares', description: 'Crie componentes reutilizáveis com facilidade.' }
      ],
      faqs: [
        { question: 'Como instalo LAEL?', answer: 'Você pode instalar seguindo nossa documentação oficial no GitHub.' },
        { question: 'Posso usar pacotes Python?', answer: 'Sim! LAEL é compatível com pacotes Python como NumPy, Pandas, etc.' }
      ]
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
});
