import { ProjectStat } from "../models/ProjectStat";



const trackProjectClick = async(req, res) => {
    try {
        const projectName = req.body.projectName;
        if(!projectName) return res.status(204).end(); // for testing only...

        await ProjectStat.findOneAndUpdate({ projectName }, {$inc: {clickCount: 1}}, {upsert: true });

        console.log("Project click tracked");
        res.status(204).end();

    } catch (error) {
        console.error("Error tracking project click:", error);
        res.status(204).end();
    }
}

export { trackProjectClick };