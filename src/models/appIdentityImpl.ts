import {AppIdentity} from './appIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AppIdentityImpl implements AdditionalDataHolder, AppIdentity, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Refers to the unique identifier representing Application Id in the Azure Active Directory. */
    public appId?: string | undefined;
    /** Refers to the Application Name displayed in the Azure Portal. */
    public displayName?: string | undefined;
    /** Refers to the unique identifier indicating Service Principal Id in Azure Active Directory for the corresponding App. */
    public servicePrincipalId?: string | undefined;
    /** Refers to the Service Principal Name is the Application name in the tenant. */
    public servicePrincipalName?: string | undefined;
    /**
     * Instantiates a new appIdentity and sets the default values.
     * @param appIdentityParameterValue 
     */
    public constructor(appIdentityParameterValue?: AppIdentity | undefined) {
        this.additionalData = appIdentityParameterValue?.additionalData ? appIdentityParameterValue?.additionalData! : {}
        this.appId = appIdentityParameterValue?.appId ;
        this.displayName = appIdentityParameterValue?.displayName ;
        this.servicePrincipalId = appIdentityParameterValue?.servicePrincipalId ;
        this.servicePrincipalName = appIdentityParameterValue?.servicePrincipalName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "appId": n => { this.appId = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "servicePrincipalId": n => { this.servicePrincipalId = n.getStringValue(); },
            "servicePrincipalName": n => { this.servicePrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.appId){
        writer.writeStringValue("appId", this.appId);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.servicePrincipalId){
        writer.writeStringValue("servicePrincipalId", this.servicePrincipalId);
        }
        if(this.servicePrincipalName){
        writer.writeStringValue("servicePrincipalName", this.servicePrincipalName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
