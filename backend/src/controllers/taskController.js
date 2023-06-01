import connect from "../database"


export const getTasks=async(req,res)=>{
    const db=await connect()
    const [rows]=await db.query('SELECT * FROM tasks')
   console.log(rows);
}

export const getTask=async(req,res)=>{
    const db=await connect();
    const [rows]=await db.query('SELECT * FROM tasks WHERE id=?',[req.params.id])
    res.json(rows[0])
}
export const getTasksCount=async(req,res)=>{
    const db=await connect()
    const [rows]=await db.query('SELECT COUNT(*) FROM tasks')
    res.json(rows[0]["COUNT(*)"])
}
export const createTask=async(req,res)=>{
    const db=await connect()
    const [result]=await db.query('INSERT INTO tasks(title,description) VALUES (?,?)',[req.body.title,req.body.description])
      if (result.affectedRows!=0) {
        res.json('guardada')
      }else{
        res.json('no guardada')
      }
}
export const deleteTask=async(req,res)=>{
   const db=await connect()
   const [result]=await db.query('DELETE FROM tasks WHERE id=?',[req.params.id])
   if (result.affectedRows!=0) {
    res.json('eliminada')
   }else{
    res.json('no eliminada')
   }

}
export const updateTask=async(req,res)=>{
     const db=await connect()
     const [result]=await db.query('UPDATE tasks SET ? WHERE id=?',[req.body,req.params.id])
     if (result.affectedRows!=0) {
        res.json('update')
     }else{
        res.json('no update')
     }

}