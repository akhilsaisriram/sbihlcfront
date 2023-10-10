import React, { useState,useEffect } from 'react'
import { Rating } from '@mui/material';
function Review({ perhlc}) {

return(
<div>

 

{
(perhlc.reviews).map(mess=><div style={{margin:10}} >
  <div class="card-body">

<div style={{"textAlign":"left"}} >
  <div>
<h5 calss="card-title"  > {mess.sendername}  </h5 > <h > <Rating   style={{textAlign:"right"}} name="disabled" value={mess.rate} disabled /></h>
</div>

<h> {mess.message_text}</h>
<hr></hr>

</div>

       
  </div>
  
  </div>
)
}

</div>
    );
}

export default Review;