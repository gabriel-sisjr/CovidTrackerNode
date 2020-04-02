export default interface Endereco {
    ID: number
    LATITUDE: string
    LONGITUDE: string
    CEP: string
    LOGRADOURO: string
    BAIRRO: string
    CIDADE: string
    UF: string
    CREATED_AT: any
    UPDATED_AT?: any
    PESSOA_ID: number
}
