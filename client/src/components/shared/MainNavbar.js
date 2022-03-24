
         import { Link } from 'react-router-dom';
         import { Navbar, Container, Nav } from 'react-bootstrap';
         import { NavItems } from '../styles/shared';
         import { HandyMen } from '../styles/shared';
         import { NavigationItems } from '../styles/shared';

         
         const MainNavbar = () => (
           <>
              <Navbar>
               <Container>
               <Link to='/'>
                 <HandyMen>HandyMan</HandyMen>
               </Link>
                 <Nav>
                   <NavigationItems>
                     <Link to='/'>
                       <NavItems>Home</NavItems>
                     </Link>
                   </NavigationItems>
                   <NavigationItems>
                     <Link to='/about'>
                     <NavItems>Team</NavItems>
                     </Link>
                   </NavigationItems>
                   <NavigationItems>
                     <Link to='/Workers'>
                     <Link to='/workers'>
                     <NavItems>Worker</NavItems>
                     </Link>
                   </NavigationItems>
                 </Nav>
              
               </Container>
             </Navbar>
            
           </>
   
         )
         
         export default MainNavbar;