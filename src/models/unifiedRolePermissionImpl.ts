import {UnifiedRolePermission} from './unifiedRolePermission';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRolePermissionImpl implements AdditionalDataHolder, Parsable, UnifiedRolePermission {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Set of tasks that can be performed on a resource. */
    public allowedResourceActions?: string[] | undefined;
    /** Optional constraints that must be met for the permission to be effective. */
    public condition?: string | undefined;
    /** Set of tasks that may not be performed on a resource. Not yet supported. */
    public excludedResourceActions?: string[] | undefined;
    /**
     * Instantiates a new unifiedRolePermission and sets the default values.
     * @param unifiedRolePermissionParameterValue 
     */
    public constructor(unifiedRolePermissionParameterValue?: UnifiedRolePermission | undefined) {
        this.additionalData = unifiedRolePermissionParameterValue?.additionalData ? unifiedRolePermissionParameterValue?.additionalData! : {}
        this.allowedResourceActions = unifiedRolePermissionParameterValue?.allowedResourceActions ;
        this.condition = unifiedRolePermissionParameterValue?.condition ;
        this.excludedResourceActions = unifiedRolePermissionParameterValue?.excludedResourceActions ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowedResourceActions": n => { this.allowedResourceActions = n.getCollectionOfPrimitiveValues<string>(); },
            "condition": n => { this.condition = n.getStringValue(); },
            "excludedResourceActions": n => { this.excludedResourceActions = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.allowedResourceActions){
        writer.writeCollectionOfPrimitiveValues<string>("allowedResourceActions", this.allowedResourceActions);
        }
        if(this.condition){
        writer.writeStringValue("condition", this.condition);
        }
        if(this.excludedResourceActions){
        writer.writeCollectionOfPrimitiveValues<string>("excludedResourceActions", this.excludedResourceActions);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
