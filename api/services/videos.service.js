const prisma = require('../db/prisma')

module.exports = {
    getAllVideos,
    getSingleVideo,
    uploadVideo
}

async function getAllVideos() {
    try {
        return await prisma.video.findMany()
    } catch (error) {
        console.log("Video Service Error (getAllVideos): " + error)
    }
}

async function getSingleVideo(id) {
    try {
        return await prisma.video.findUnique({
            where: {
                id: id
            }
        })
    } catch (error) {
        console.log("Video Service Error (getSingleVideo): " + error)
    }

}

async function uploadVideo(video) {
    try {
        return await prisma.video.create({
            data: {
                name: video.name,
                size: video.size
            }
        })
    } catch (error) {
        console.log("Video Service Error (uploadlVideo): " + error)
    }
    
}