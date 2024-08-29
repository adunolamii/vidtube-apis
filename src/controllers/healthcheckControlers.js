import {apiResponse} from "../utils/apiResponse.js"
import {asyncHandler} from "../utils/ansyncHandler.js"

const healthcheck = asyncHandler(async (req, res)=>{
    return res.staus(200).json(new apiResponse(200, "ok", "healthcheck passed"))
 })

 export default {healthcheck}