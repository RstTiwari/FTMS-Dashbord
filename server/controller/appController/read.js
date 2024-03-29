const read = async (req, res, next, database) => {
    try {
        let {entity,id} = req.query;
        let tenantId = req.tenantId;
        let data = await database.findOne({ tenantId: tenantId, _id: id });
        if (!data) {
            throw new Error(`Failed to find ${entity} data`);
        }
        res.status(200).json({
            success: 1,
            result: data,
            message: `Data Feteched SuccessFully`,
        });
    } catch (error) {
        res.status(403).json({
            success: 0,
            result: [],
            message: error.message,
        });
    }
};
export default read