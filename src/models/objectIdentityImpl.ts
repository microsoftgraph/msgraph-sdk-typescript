import {ObjectIdentity} from './objectIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ObjectIdentityImpl implements AdditionalDataHolder, ObjectIdentity, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Specifies the issuer of the identity, for example facebook.com.For local accounts (where signInType is not federated), this property is the local B2C tenant default domain name, for example contoso.onmicrosoft.com.For external users from other Azure AD organization, this will be the domain of the federated organization, for example contoso.com.Supports $filter. 512 character limit. */
    public issuer?: string | undefined;
    /** Specifies the unique identifier assigned to the user by the issuer. The combination of issuer and issuerAssignedId must be unique within the organization. Represents the sign-in name for the user, when signInType is set to emailAddress or userName (also known as local accounts).When signInType is set to: emailAddress, (or a custom string that starts with emailAddress like emailAddress1) issuerAssignedId must be a valid email addressuserName, issuerAssignedId must be a valid local part of an email addressSupports $filter. 100 character limit. */
    public issuerAssignedId?: string | undefined;
    /** Specifies the user sign-in types in your directory, such as emailAddress, userName, federated, or userPrincipalName. federated represents a unique identifier for a user from an issuer, that can be in any format chosen by the issuer. Setting or updating a userPrincipalName identity will update the value of the userPrincipalName property on the user object. The validations performed on the userPrincipalName property on the user object, for example, verified domains and acceptable characters, will be performed when setting or updating a userPrincipalName identity. Additional validation is enforced on issuerAssignedId when the sign-in type is set to emailAddress or userName. This property can also be set to any custom string. */
    public signInType?: string | undefined;
    /**
     * Instantiates a new objectIdentity and sets the default values.
     * @param objectIdentityParameterValue 
     */
    public constructor(objectIdentityParameterValue?: ObjectIdentity | undefined) {
        this.additionalData = objectIdentityParameterValue?.additionalData ? objectIdentityParameterValue?.additionalData! : {}
        this.issuer = objectIdentityParameterValue?.issuer ;
        this.issuerAssignedId = objectIdentityParameterValue?.issuerAssignedId ;
        this.signInType = objectIdentityParameterValue?.signInType ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "issuer": n => { this.issuer = n.getStringValue(); },
            "issuerAssignedId": n => { this.issuerAssignedId = n.getStringValue(); },
            "signInType": n => { this.signInType = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.issuer){
        writer.writeStringValue("issuer", this.issuer);
        }
        if(this.issuerAssignedId){
        writer.writeStringValue("issuerAssignedId", this.issuerAssignedId);
        }
        if(this.signInType){
        writer.writeStringValue("signInType", this.signInType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
