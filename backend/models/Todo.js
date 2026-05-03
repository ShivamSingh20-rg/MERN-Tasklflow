const mongoose= require('mongoose')


const Todosc = new mongoose.Schema({
    tasks: { type: String, required: true },
    completed: { type: Boolean, default: false },
   userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  }
})

const TodoSchema = mongoose.model( 'dds',  Todosc)

module.exports =  TodoSchema