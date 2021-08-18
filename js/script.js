new Vue({
    el: '#main-content',
    data: {
        post: " VueJS APP test",
        editor: "sabah-HM",
        note: "Excellent! ",
        image: "https://tilde.com/sites/default/files/inline-images/Tilde%20MT_For%20LSPs.png",
        reference: '<a href="https://www.eprostam.com"> Prostamian </a>',
        count_reads: 0
    },
    methods: {
        // Return editor's notes
        editorNotes: function(){
            // getting today's date :
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = dd + '/' + mm + '/' + yyyy;
            return `This is ${this.note} ! Today is ${today}}`;
        },

        // add a reader
        increamentReads: function(){
            this.count_reads++;
        },
        // remove a reader
        decreamentReads: function(){
            this.count_reads--;
        },

        // double clicked method!
        doubleClicked: function(feeling){
            alert(`Ok! We get that you ${feeling} this post!!!`)
        }
    }
})