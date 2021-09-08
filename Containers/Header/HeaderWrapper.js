import styled from "styled-components";

const HeaderWrapper = styled.div`
    Button {
        box-shadow: none;
        border-radius: 0;
        &:hover {
            box-shadow: none;
            
        }
    }
    .logo {
        height: 50px;
    }
    .search {
        background-color: #FF5314;
        border: 1px solid #FF5314;
        input {
            border-color: #FF5314;
        }
    }
    Button {
        text-transform: capitalize;
        &:hover{
            color: black !important;
        }
    }
    .Categories {
        background-color: #FF5314;
        color: white;
        border-radius: 0 !important;
        box-shadow: none !important;
        &:hover{
            background-color: #FF5314;
            color: white !important;
        }
    }
    .CategoriesMenu {
        width: 500px !important;
        
    }
    .menuItem {
        width: 300px !important;
    }
`;

export default HeaderWrapper;