export const addJob = (txtJob) =>({type:'add',content:txtJob});
export const icreJob = (txtJob) =>({type:'incre',content:txtJob});
export const deleteJob = (id) =>({type:'delete',content:id});
export const editJob = (id,txtJob) =>({type:'edit',content:{id,txtJob}});
