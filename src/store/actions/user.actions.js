
export const SET_USUARIO= "[USUARIO] SET USUARIO";
export const set_usuario = (nombres, documento, celular, email) => ({
    type: SET_USUARIO,
    payload: {nombres, documento, celular, email}
});

export const SET_TOKEN= "[USUARIO] SET TOKEN";
export const set_token = (token) => ({
    type: SET_TOKEN,
    payload: token
});

export const SET_SALDO_NOMBRES= "[USUARIO] SET SALDO, NOMBRES";
export const set_saldo_nombres = (saldo, nombres ) => ({
    type: SET_SALDO_NOMBRES,
    payload: {saldo, nombres}
});

export const SET_DOCUMENTO_CELULAR= "[USUARIO] SET DOCUMENTO CELULAR";
export const set_documento_celular = (documento, celular) => ({
    type: SET_DOCUMENTO_CELULAR,
    payload: {documento, celular}
});

export const REMOVE_USUARIO= "[USUARIO] REMOVE USUARIO";
export const remove_usuario = () => ({
    type: REMOVE_USUARIO,
});