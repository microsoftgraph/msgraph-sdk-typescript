import {Json} from '../../../../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SetPositionPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The endCell property */
    private _endCell?: Json | undefined;
    /** The startCell property */
    private _startCell?: Json | undefined;
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
     * Instantiates a new setPositionPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the endCell property value. The endCell property
     * @returns a Json
     */
    public get endCell() {
        return this._endCell;
    };
    /**
     * Sets the endCell property value. The endCell property
     * @param value Value to set for the endCell property.
     */
    public set endCell(value: Json | undefined) {
        this._endCell = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "endCell": n => { this.endCell = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "startCell": n => { this.startCell = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("endCell", this.endCell);
        writer.writeObjectValue<Json>("startCell", this.startCell);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the startCell property value. The startCell property
     * @returns a Json
     */
    public get startCell() {
        return this._startCell;
    };
    /**
     * Sets the startCell property value. The startCell property
     * @param value Value to set for the startCell property.
     */
    public set startCell(value: Json | undefined) {
        this._startCell = value;
    };
}
