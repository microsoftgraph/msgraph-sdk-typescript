
export interface AppIdentity{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Refers to the unique identifier representing Application Id in the Azure Active Directory. */
    appId?:string | undefined;
    /** Refers to the Application Name displayed in the Azure Portal. */
    displayName?:string | undefined;
    /** Refers to the unique identifier indicating Service Principal Id in Azure Active Directory for the corresponding App. */
    servicePrincipalId?:string | undefined;
    /** Refers to the Service Principal Name is the Application name in the tenant. */
    servicePrincipalName?:string | undefined;
}
