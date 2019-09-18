let vm = new Vue({
    el: '#contactForm',
    data: {
        errors: [],
        f_name: null,
        phone: null,
        message: null,
        response: null
    },
    methods: {
        checkForm: function (e) {
            e.preventDefault();
            this.errors = [];
      
            if (!this.f_name) {
              this.errors.push('Укажите имя.');
            }
            if (!this.phone) {
              this.errors.push('Укажите телефон.');
            }
            if (!this.message) {
                this.errors.push('Заполните текст обращения.');
            }
            
            if (!this.errors.length) {
              $.ajax({
                type: $(this.$options.el).attr('method'),
                url: $(this.$options.el).attr('action'),
                data: {
                  name: this.f_name,
                  phone: this.phone,
                  message: this.message
                },
                success: function(data){
                  if(data)
                    vm.response = 'Ваша заявка принята.';
                  else
                    vm.response = 'Ошибка при отправке заявки.';
                }
              });
            }
            
        }
    }
});

