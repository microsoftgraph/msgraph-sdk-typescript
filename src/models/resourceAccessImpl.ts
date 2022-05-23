import {ResourceAccess} from './resourceAccess';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ResourceAccessImpl implements AdditionalDataHolder, Parsable, ResourceAccess {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The unique identifier of an app role or delegated permission exposed by the resource application. For delegated permissions, this should match the id property of one of the delegated permissions in the oauth2PermissionScopes collection of the resource application's service principal. For app roles (application permissions), this should match the id property of an app role in the appRoles collection of the resource application's service principal. */
    public id?: string | undefined;
    /** Specifies whether the id property references a delegated permission or an app role (application permission). The possible values are: Scope (for delegated permissions) or Role (for app roles). */
    public type?: string | undefined;
    /**
     * Instantiates a new resourceAccess and sets the default values.
     * @param resourceAccessParameterValue 
     */
    public constructor(resourceAccessParameterValue?: ResourceAccess | undefined) {
        this.additionalData = resourceAccessParameterValue?.additionalData ? resourceAccessParameterValue?.additionalData! : {}
        this.id = resourceAccessParameterValue?.id ;
        this.type = resourceAccessParameterValue?.type ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "id": n => { this.id = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.id){
        writer.writeStringValue("id", this.id);
        }
        if(this.type){
        writer.writeStringValue("type", this.type);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
