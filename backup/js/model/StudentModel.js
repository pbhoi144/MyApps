console.log('StudentModel Loaded...');
define(['js/utilities/Constant', 'js/utilities/ServiceManager'], function(CONSTANTS, ServiceManager){

    function StudentModel(){
        console.log('StudentModel initiated...');

        this.serviceManagerObject = new ServiceManager();
    }

    StudentModel.prototype.submitLoginForm = function(eventData){
        console.log("Submit Login Form...");
        console.log(eventData);


    }


    return StudentModel;
});