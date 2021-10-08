$( document ).ready(function() {
    var starCountRef = firebase.database().ref('tracker/testuser1234');
    starCountRef.on('value', (snapshot) => {
        const data = snapshot.val();
        $( "#demo-box" ).html(`
        <h1>
            ${data.work.apptitle}
        </h1>
        `);
    });
});