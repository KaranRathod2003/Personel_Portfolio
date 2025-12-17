import mongoose from 'mongoose';


const ProjectStatSchema = new mongoose.Schema({
    projectName : {
        type : String,
        required : true,
        unique : true
    },
    clickCount : {
        type : Number,
        default : 0
    }
});


const ProjectStat = mongoose.model('ProjectStat', ProjectStatSchema);

export { ProjectStat };