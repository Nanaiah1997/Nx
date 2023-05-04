import { makeStyles } from "@mui/styles";



export const useStyle = makeStyles((theme) =>{
    return{
        table :{
            border: 'solid 1px #DDEEEE',
            borderCollapse: 'collapse',
            borderSpacing: 0,
           
        },

        thead_th:{
            backgroundColor: '#DDEFEF',
            border: 'solid 1px #DDEEEE',
            color:' #336B6B',
            padding: '10px',
            textAlign: 'left',
            textShadow: '1px 1px 1px #fff',
        },
      tbody: {
            border: 'solid 1px #DDEEEE',
            color: '#333',
            padding: '10px',
            texShadow:' 1px 1px 1px #fff'
    },
    // button :{
    //     backgroundColor: theme.palatte.background.bg_3,
    // }
    }
            
    
})