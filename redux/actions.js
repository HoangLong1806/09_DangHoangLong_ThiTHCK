export const addJ = (txtJob) =>({type:'add',content:txtJob});
export const deleteJ = (id) =>({type:'delete',content:id});
export const editJ = (id,txtJob) =>({type:'edit',content:{id,txtJob}});
