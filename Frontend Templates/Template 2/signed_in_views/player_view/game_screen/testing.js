// document.addEventListener('DOMContentLoaded',);

class Testingmodule{
    #enabled;
    constructor(){
        this.#enabled = false;
    }
    activate(){
        this.#enabled = true;
        check_table_coherence();
        document.querySelectorAll('.plot_buttons').forEach((element) => {
            var original = element.onclick;
            element.onclick = () => {
                original();
                check_plotted();
            }
        });
    }
    poll(){
        return this.#enabled;
    }
}


tests = new Testingmodule();


function check_table_coherence() {
    /*Checks if the rows in the table correspond to the current wek that the 
    player is playing for*/
    if(!tests.poll()){
        console.warn('Testing mode is not enabled. Run test.activate() to enable testing mode.');
        return;
    }
    var count = 0;
    var weeks = parseInt(document.getElementById('weeks_elapsed').innerHTML);
    document.querySelectorAll('.week_info').forEach((element) => {
        count++;
    });
    console.log(weeks);
    console.log(count);
    if(count + 1 == weeks){
        console.log('Test case check_table_coherence passed!!')
    }else{
        console.error('Test case check_table_coherence failed...')
    }
}

function check_plotted(){
    if(!tests.poll()){
        console.warn('Testing mode is not enabled. Run test.activate() to enable testing mode.');
        return;
    }
    console.log('check_plotted test case running...');
    console.log('Checking if the graph has been plotted');
    document.getElementById('back_button').onclick = () => {
        unplot();
        check_unplotted();
    };
    let quadrants_hidden = true;
    document.querySelectorAll('.quadrants').forEach((element) => {
        if(element.style.visibility == 'hidden'){
            quadrants_hidden = quadrants_hidden && true;
        }else{
            quadrants_hidden = quadrants_hidden && false;
        }
    });
    if(quadrants_hidden){
        console.info('check_plotted test case passed!!!')
    }else{
        console.error('check_plotted test case failed...');
    }
}


function check_unplotted(){
    if(!tests.poll()){
        console.warn('Testing mode is not enabled. Run test.activate() to enable testing mode.');
        return;
    }
    console.log('Test case check unplotted running...');
    var count = 0;
    document.querySelectorAll('.quadrant').forEach((element) => {
        if(element.id !== 'trash_can' && element.style.visibility == 'visible'){
            count += 1;
        }
    }); 
    if(count !== 4){
        console.error('Test case check_unplotted failed... not 4 quadrants');
        return;
    }
    count = 0;
    document.querySelectorAll('#plot_space').forEach(element => count++);
    if(count !== 0){
        console.error('Test case check_unplotted failed.... plot space still there');
    }else{
        console.info('Test case check_unplotted successful!!');
    }
}