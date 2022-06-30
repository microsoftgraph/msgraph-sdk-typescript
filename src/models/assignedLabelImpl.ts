import {AssignedLabel} from './assignedLabel';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AssignedLabelImpl implements AssignedLabel {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The display name of the label. Read-only. */
    private _displayName?: string | undefined;
    /** The unique identifier of the label. */
    private _labelId?: string | undefined;
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new assignedLabel and sets the default values.
     * @param assignedLabelParameterValue 
     */
    public constructor(assignedLabelParameterValue?: AssignedLabel | undefined) {
        this._additionalData = assignedLabelParameterValue?.additionalData ? assignedLabelParameterValue?.additionalData! : {};
        this._displayName = assignedLabelParameterValue?.displayName;
        this._labelId = assignedLabelParameterValue?.labelId;
    };
    /**
     * Gets the displayName property value. The display name of the label. Read-only.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name of the label. Read-only.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "labelId": n => { this.labelId = n.getStringValue(); },
        };
    };
    /**
     * Gets the labelId property value. The unique identifier of the label.
     * @returns a string
     */
    public get labelId() {
        return this._labelId;
    };
    /**
     * Sets the labelId property value. The unique identifier of the label.
     * @param value Value to set for the labelId property.
     */
    public set labelId(value: string | undefined) {
        if(value) {
            this._labelId = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.labelId){
            writer.writeStringValue("labelId", this.labelId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
