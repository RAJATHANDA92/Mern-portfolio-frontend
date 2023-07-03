import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    msg:"",
    user:"",
    token:"",
    loading:false,
    error:""
}

export const singUpUser = createAsyncThunk('singupuser',async (body) => {
    const res = await fetch(axios.post("http://localhost:5050/api/register"),{
      methode:"post",
      headers:{
        "Content-type":"application/josn",
      },
      body:JSON.stringify(body),
    });
    return await res.json();
});

export const singInUser = createAsyncThunk('singinuser',async (body) => {
    const res = await fetch(axios.post("http://localhost:5050/api/login"),{
      methode:"post",
      headers:{
        "Content-type":"application/josn",
      },
      body:JSON.stringify(body),
    });
    return await res.json();
});

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
   
        addToken:(state, action) => {
            state.token = localStorage.getItem("token")
        },
        addUser:(state, action) => {
            state.token = localStorage.getItem("user")
        },
        logout:(state, action) => {
            state.token = null;
           localStorage.clear();
        }
    },
    extraReducers:{
/*  ********************Login************************ */
        [singInUser.pending]: (state, action)=>{
            state.loading =true
        },
        [singInUser.fulfilled]: (state, {payload:{error,msg,token,user}})=>{
            state.loading =true
            if(error){
                state.error = error
            }else{
                state.msg = msg
                state.token = token;
                state.user = user;

                localStorage.setItem('msg', msg)
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user));
            }
        },
       
        [singInUser.rejected]: (state, action)=>{
            state.loading =true
        },
/*  *******************SingUp************************* */
        [singUpUser.pending]: (state, action)=>{
            state.loading =true
        },
        [singUpUser.fulfilled]: (state, {payload:{error,msg}})=>{
            state.loading =true
            if(error){
                state.error = error
            }else{
                state.msg = msg
            }
        },
        [singUpUser.rejected]: (state, action)=>{
            state.loading =true
        }
    }    
    
})

export const { addToken, addUser, logout } = authSlice.actions;

export default authSlice.reducer;