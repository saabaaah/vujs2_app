new Vue({
    el: '#main-content',
    data: {
        post: " VueJS APP test",
        editor: "sabah-HM",
        note: "Excellent! "
    },
    methods: {
        editorNotes: function(){
            // getting today's date :
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = dd + '/' + mm + '/' + yyyy;
            return `This is ${this.note} ! Today is ${today}}`;
        }
    }
})