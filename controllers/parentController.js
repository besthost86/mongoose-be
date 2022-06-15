import Parent from '../models/Parent.js'

class ParentController {
    async getParent(req, res) {
        const anyParent = await Parent.findOne({});
        if (!anyParent) return res.json({ message: "No records found!" });
        res.json(anyParent);
    }
    async createParent(req, res) {
        const parent = new Parent({ children: [{ name: 'Sarah' }, { name: 'John' }] });
        const doc = await parent.save();
        res.json(doc);
    }
}
export default new ParentController();