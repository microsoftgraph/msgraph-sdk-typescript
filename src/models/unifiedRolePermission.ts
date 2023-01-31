import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRolePermission implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Set of tasks that can be performed on a resource. Required. */
    private _allowedResourceActions?: string[] | undefined;
    /** Optional constraints that must be met for the permission to be effective. Not supported for custom roles. */
    private _condition?: string | undefined;
    /** Set of tasks that may not be performed on a resource. Not yet supported. */
    private _excludedResourceActions?: string[] | undefined;
    private _odataType?: string | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the allowedResourceActions property value. Set of tasks that can be performed on a resource. Required.
     * @returns a string
     */
    public get allowedResourceActions() {
        return this._allowedResourceActions;
    };
    /**
     * Sets the allowedResourceActions property value. Set of tasks that can be performed on a resource. Required.
     * @param value Value to set for the allowedResourceActions property.
     */
    public set allowedResourceActions(value: string[] | undefined) {
        this._allowedResourceActions = value;
    };
    /**
     * Gets the condition property value. Optional constraints that must be met for the permission to be effective. Not supported for custom roles.
     * @returns a string
     */
    public get condition() {
        return this._condition;
    };
    /**
     * Sets the condition property value. Optional constraints that must be met for the permission to be effective. Not supported for custom roles.
     * @param value Value to set for the condition property.
     */
    public set condition(value: string | undefined) {
        this._condition = value;
    };
    /**
     * Instantiates a new unifiedRolePermission and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
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
        this._excludedResourceActions = value;
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
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("allowedResourceActions", this.allowedResourceActions);
        writer.writeStringValue("condition", this.condition);
        writer.writeCollectionOfPrimitiveValues<string>("excludedResourceActions", this.excludedResourceActions);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
