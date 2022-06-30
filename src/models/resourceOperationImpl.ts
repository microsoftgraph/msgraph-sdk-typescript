import {EntityImpl} from './index';
import {ResourceOperation} from './resourceOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Describes the resourceOperation resource (entity) of the Microsoft Graph API (REST), which supports Intune workflows related to role-based access control (RBAC). */
export class ResourceOperationImpl extends EntityImpl implements ResourceOperation {
    /** Type of action this operation is going to perform. The actionName should be concise and limited to as few words as possible. */
    private _actionName?: string | undefined;
    /** Description of the resource operation. The description is used in mouse-over text for the operation when shown in the Azure Portal. */
    private _description?: string | undefined;
    /** Name of the Resource this operation is performed on. */
    private _resourceName?: string | undefined;
    /**
     * Gets the actionName property value. Type of action this operation is going to perform. The actionName should be concise and limited to as few words as possible.
     * @returns a string
     */
    public get actionName() {
        return this._actionName;
    };
    /**
     * Sets the actionName property value. Type of action this operation is going to perform. The actionName should be concise and limited to as few words as possible.
     * @param value Value to set for the actionName property.
     */
    public set actionName(value: string | undefined) {
        if(value) {
            this._actionName = value;
        }
    };
    /**
     * Instantiates a new resourceOperation and sets the default values.
     * @param resourceOperationParameterValue 
     */
    public constructor(resourceOperationParameterValue?: ResourceOperation | undefined) {
        super(resourceOperationParameterValue);
        this._actionName = resourceOperationParameterValue?.actionName;
        this._description = resourceOperationParameterValue?.description;
        this._resourceName = resourceOperationParameterValue?.resourceName;
    };
    /**
     * Gets the description property value. Description of the resource operation. The description is used in mouse-over text for the operation when shown in the Azure Portal.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description of the resource operation. The description is used in mouse-over text for the operation when shown in the Azure Portal.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "actionName": n => { this.actionName = n.getStringValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "resourceName": n => { this.resourceName = n.getStringValue(); },
        };
    };
    /**
     * Gets the resourceName property value. Name of the Resource this operation is performed on.
     * @returns a string
     */
    public get resourceName() {
        return this._resourceName;
    };
    /**
     * Sets the resourceName property value. Name of the Resource this operation is performed on.
     * @param value Value to set for the resourceName property.
     */
    public set resourceName(value: string | undefined) {
        if(value) {
            this._resourceName = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.actionName){
            writer.writeStringValue("actionName", this.actionName);
        }
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.resourceName){
            writer.writeStringValue("resourceName", this.resourceName);
        }
    };
}
