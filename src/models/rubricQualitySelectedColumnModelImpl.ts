import {RubricQualitySelectedColumnModel} from './rubricQualitySelectedColumnModel';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RubricQualitySelectedColumnModelImpl implements RubricQualitySelectedColumnModel {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** ID of the selected level for this quality. */
    private _columnId?: string | undefined;
    /** ID of the associated quality. */
    private _qualityId?: string | undefined;
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
     * Gets the columnId property value. ID of the selected level for this quality.
     * @returns a string
     */
    public get columnId() {
        return this._columnId;
    };
    /**
     * Sets the columnId property value. ID of the selected level for this quality.
     * @param value Value to set for the columnId property.
     */
    public set columnId(value: string | undefined) {
        if(value) {
            this._columnId = value;
        }
    };
    /**
     * Instantiates a new rubricQualitySelectedColumnModel and sets the default values.
     * @param rubricQualitySelectedColumnModelParameterValue 
     */
    public constructor(rubricQualitySelectedColumnModelParameterValue?: RubricQualitySelectedColumnModel | undefined) {
        this._additionalData = rubricQualitySelectedColumnModelParameterValue?.additionalData ? rubricQualitySelectedColumnModelParameterValue?.additionalData! : {};
        this._columnId = rubricQualitySelectedColumnModelParameterValue?.columnId;
        this._qualityId = rubricQualitySelectedColumnModelParameterValue?.qualityId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "columnId": n => { this.columnId = n.getStringValue(); },
            "qualityId": n => { this.qualityId = n.getStringValue(); },
        };
    };
    /**
     * Gets the qualityId property value. ID of the associated quality.
     * @returns a string
     */
    public get qualityId() {
        return this._qualityId;
    };
    /**
     * Sets the qualityId property value. ID of the associated quality.
     * @param value Value to set for the qualityId property.
     */
    public set qualityId(value: string | undefined) {
        if(value) {
            this._qualityId = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.columnId){
            writer.writeStringValue("columnId", this.columnId);
        }
        if(this.qualityId){
            writer.writeStringValue("qualityId", this.qualityId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
