import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AppIdentity extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Refers to the Unique GUID representing Application Id in the Azure Active Directory.
     */
    appId?: string | undefined;
    /**
     * Refers to the Application Name displayed in the Azure Portal.
     */
    displayName?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Refers to the Unique GUID indicating Service Principal Id in Azure Active Directory for the corresponding App.
     */
    servicePrincipalId?: string | undefined;
    /**
     * Refers to the Service Principal Name is the Application name in the tenant.
     */
    servicePrincipalName?: string | undefined;
}
