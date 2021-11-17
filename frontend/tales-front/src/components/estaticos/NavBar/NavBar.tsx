import React from 'react'
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './NavBar.css'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useHistory();

    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false, 
            draggable: false, 
            theme: 'colored', 
            progress: undefined 
        })
        history.push('/login')
    }

    var navbarComponent;

    if(token != ''){
      navbarComponent = <AppBar position="static" className="cor-navBar">
      <Toolbar variant="dense">
          <Box>
              <img src="https://i.imgur.com/kjX8SxB.png" alt="" className="logo-nav" />
          </Box>

          <Box display="flex" justifyContent="space-around" ml="alto" width="100%">
              <Link to="/home" className="text-decoration-none">
                  <Box mx={1} className="cursor">
                      <Typography variant="h6" color="inherit">
                          Home
                      </Typography>
                  </Box>
              </Link>
              <Link to="/sobre-nos" className="text-decoration-none">
                  <Box mx={1} className="cursor">
                      <Typography variant="h6" color="inherit">
                          Sobre nós
                      </Typography>
                  </Box>
              </Link>
              <Link to="/posts" className="text-decoration-none">
                  <Box mx={1} className="cursor">
                      <Typography variant="h6" color="inherit">
                          Postagens
                      </Typography>
                  </Box>
              </Link>
              <Link to="/temas" className="text-decoration-none">
                  <Box mx={1} className="cursor">
                      <Typography variant="h6" color="inherit">
                          Temas
                      </Typography>
                  </Box>
              </Link>
              <Link to="/formularioTema" className="text-decorator-none">
                  <Box mx={1} className='cursor'>
                      <Typography variant="h6" color="inherit">
                          Cadastrar tema
                      </Typography>
                  </Box>
              </Link>
              <Box mx={1} className='cursor' onClick={goLogout}>
                  <Typography variant="h6" color="inherit"> 
                      Sair
                  </Typography>
              </Box>
          </Box>

      </Toolbar>
  </AppBar>
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;