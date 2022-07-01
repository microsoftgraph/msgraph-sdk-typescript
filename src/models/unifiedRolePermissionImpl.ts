import {UnifiedRolePermission} from './unifiedRolePermission';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRolePermissionImpl implements UnifiedRolePermission {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Set of tasks that can be performed on a resource. */
    private _allowedResourceActions?: string[] | undefined;
    /** Optional constraints that must be met for the permission to be effective. */
    private _condition?: string | undefined;
    /** Set of tasks that may not be performed on a resource. Not yet supported. */
    private _excludedResourceActions?: string[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the allowedResourceActions property value. Set of tasks that can be performed on a resource.
     * @returns a string
     */
    public get allowedResourceActions() {
        return this._allowedResourceActions;
    };
    /**
     * Sets the allowedResourceActions property value. Set of tasks that can be performed on a resource.
     * @param value Value to set for the allowedResourceActions property.
     */
    public set allowedResourceActions(value: string[] | undefined) {
        if(value) {
            this._allowedResourceActions = value;
        }
    };
    /**
     * Gets the condition property value. Optional constraints that must be met for the permission to be effective.
     * @returns a string
     */
    public get condition() {
        return this._condition;
    };
    /**
     * Sets the condition property value. Optional constraints that must be met for the permission to be effective.
     * @param value Value to set for the condition property.
     */
    public set condition(value: string | undefined) {
        if(value) {
            this._condition = value;
        }
    };
    /**
     * Instantiates a new unifiedRolePermission and sets the default values.
     * @param unifiedRolePermissionParameterValue 
     */
    public constructor(unifiedRolePermissionParameterValue?: UnifiedRolePermission | undefined) {
        this._additionalData = unifiedRolePermissionParameterValue?.additionalData ? unifiedRolePermissionParameterValue?.additionalData! : {};
        this._allowedResourceActions = unifiedRolePermissionParameterValue?.allowedResourceActions;
        this._condition = unifiedRolePermissionParameterValue?.condition;
        this._excludedResourceActions = unifiedRolePermissionParameterValue?.excludedResourceActions;
    };
    /**
     * Gets the excludedResourceActions property value. Set of tasks that may not be performed on a resource. Not yet supported.
     * @returns a string
     */
    public get excludedResourceActions() {
        return this._excludedResourceActions;
    };
    /**
     * Sets the excludedResourceActions property value. Set of tasks that may not be performed on a resource. Not yet supported.
     * @param value Value to set for the excludedResourceActions property.
     */
    public set excludedResourceActions(value: string[] | undefined) {
        if(value) {
            this._excludedResourceActions = value;
        }
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
