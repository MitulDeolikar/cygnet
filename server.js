const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Setup multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

app.post('/api/addProject', upload.single('image'), (req, res) => {
    const { title, description } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    if (!title || !description || !imageUrl) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const newProject = { id: Date.now(), title, description, image: imageUrl };
    
    // For simplicity, this example uses in-memory storage
    // In a real application, you would store this in a database
    // projects.push(newProject);

    res.status(201).json(newProject);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
