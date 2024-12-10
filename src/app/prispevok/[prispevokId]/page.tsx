// src/app/prispevok/[id]/page.tsx


import Typography from '@mui/material/Typography';

export const metadata = { title: "Detail Prispevku | ZoskaSnap" };

export default function PostList( 
  { 
    params,}:{
    params: { prispevokId:string}
  }
) {

  return (

      <Typography> Detail prispevku : {params.prispevokId} </Typography>

  );
}