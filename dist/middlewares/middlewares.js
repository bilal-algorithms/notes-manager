export function logger(req, res, next) {
    console.log(req.method, req.url, new Date());
    next();
}
export function rejectPost(req, res, next) {
    if (req.method === "POST" &&
        (!req.body.content || req.body.content.trim() === "")) {
        return res.status(400).json({
            success: false,
            message: "Content is required in POST request.",
        });
    }
    next();
}
