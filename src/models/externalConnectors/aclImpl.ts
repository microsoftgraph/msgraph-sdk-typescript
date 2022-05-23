import {AccessType} from './accessType';
import {Acl} from './acl';
import {AclType} from './aclType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AclImpl implements Acl, AdditionalDataHolder, Parsable {
    /** The access granted to the identity. Possible values are: grant, deny. */
    public accessType?: AccessType | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The type of identity. Possible values are: user, group, everyone, everyoneExceptGuests if the identitySource is azureActiveDirectory and just group if the identitySource is external. */
    public type?: AclType | undefined;
    /** The unique identifer of the identity. In case of Azure Active Directory identities, value is set to the object identifier of the user, group or tenant for types user, group and everyone (and everyoneExceptGuests) respectively. In case of external groups value is set to the ID of the externalGroup. */
    public value?: string | undefined;
    /**
     * Instantiates a new acl and sets the default values.
     * @param aclParameterValue 
     */
    public constructor(aclParameterValue?: Acl | undefined) {
        this.accessType = aclParameterValue?.accessType ;
        this.additionalData = aclParameterValue?.additionalData ? aclParameterValue?.additionalData! : {}
        this.type = aclParameterValue?.type ;
        this.value = aclParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "accessType": n => { this.accessType = n.getEnumValue<AccessType>(AccessType); },
            "type": n => { this.type = n.getEnumValue<AclType>(AclType); },
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.accessType){
        writer.writeEnumValue<AccessType>("accessType", this.accessType);
        }
        if(this.type){
        writer.writeEnumValue<AclType>("type", this.type);
        }
        if(this.value){
        writer.writeStringValue("value", this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
