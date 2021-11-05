import styled from 'styled-components';

const FormCadastrarForm = styled.form`
    .newImageBox {
        overflow: hidden;
        img.full__size  {
            width:100%;
            height:100%;
            aspect-ratio: 1 / 1;
            object-fit: cover; 
        }
    }

    .imageUrlField {
        padding-right: 30px;
    }

    .btn__verifyUrl {
        padding:0px !important;
        width:46px;
        height:46px;
        border-radius:10px;
        margin-left:-20px;

        &:hover {
            opacity:1;
        }

        &:focus {
            opacity:1;
        }
    }

    .listFilter {
        display:flex;
        gap: 10px;
        overflow-x: auto;
        padding: 0px;
        margin-top: 0px;
        margin-bottom: 30px;
        scroll-snap-type: x mandatory;   
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;

        li {
            display:flex;
            flex-direction: column;
            min-width: 88px;           
            overflow:hidden;

            img  {
            width:100%;
            height:100%;
            aspect-ratio: 1 / 1;
            object-fit: cover; 
            }

            label {
                display:flex;
                flex-direction: column;
                font-size:12px;
                color: #88989E;
                text-align: center;

                span {
                    padding: 12px 0px;
                }
            }
        }
    }

    .listFilter::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    .listFilter::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    .listFilter::-webkit-scrollbar-thumb {
        background: black;
        border-radius: 10px;
    }
    .listFilter::-webkit-scrollbar-track {
        background: transparent;
    }
`;

export const CadastrarPostHeader = styled.div`
    padding: 13px 22px;
    display: flex;
    justify-content:flex-end;
    flex:1;

    button {
    padding: 0px;
    background-color:transparent;
    }
`;

export const CadastrarPostBody = styled.div`
    background-color: #D5D5D5;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:Center;
    height:375px;
`;

export const CadastrarPostFooter = styled.div`  
    padding:32px 24px;
    
    .btn__action {
        padding: 12px 43px;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.25;
        border: 0;
        cursor: pointer;
        padding: 12px 26px;
        border: 0;   
        opacity: 1;
        -webkit-transition: opacity 200ms ease-in-out;
        transition: opacity 200ms ease-in-out;
        border-radius: 12px;
        background-color: #D7385E;
        color: #fff;
        display: block;
        width: 100%;
    }
    
    .btn__action:disabled{
        cursor: not-allowed;
        opacity: .2;
    }
`;

export default FormCadastrarForm;
