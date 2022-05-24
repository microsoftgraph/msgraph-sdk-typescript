import {ResourceSpecificPermission} from './resourceSpecificPermission';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ResourceSpecificPermissionImpl implements AdditionalDataHolder, Parsable, ResourceSpecificPermission {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Describes the level of access that the resource-specific permission represents. */
    public description?: string | undefined;
    /** The display name for the resource-specific permission. */
    public displayName?: string | undefined;
    /** The unique identifier for the resource-specific application permission. */
    public id?: string | undefined;
    /** Indicates whether the permission is enabled. */
    public isEnabled?: boolean | undefined;
    /** The value of the permission. */
    public value?: string | undefined;
    /**
     * Instantiates a new resourceSpecificPermission and sets the default values.
     * @param resourceSpecificPermissionParameterValue 
     */
    public constructor(resourceSpecificPermissionParameterValue?: ResourceSpecificPermission | undefined) {
        this.additionalData = resourceSpecificPermissionParameterValue?.additionalData ? resourceSpecificPermissionParameterValue?.additionalData! : {}
        this.description = resourceSpecificPermissionParameterValue?.description ;
        this.displayName = resourceSpecificPermissionParameterValue?.displayName ;
        this.id = resourceSpecificPermissionParameterValue?.id ;
        this.isEnabled = resourceSpecificPermissionParameterValue?.isEnabled ;
        this.value = resourceSpecificPermissionParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "isEnabled": n => { this.isEnabled = n.getBooleanValue(); },
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.id){
        writer.writeStringValue("id", this.id);
        }
        if(this.isEnabled){
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        }
        if(this.value){
        writer.writeStringValue("value", this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
