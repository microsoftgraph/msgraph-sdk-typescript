import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CombinaPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _number?: Json | undefined;
    private _numberChosen?: Json | undefined;
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
     * Instantiates a new combinaPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "number": n => { this.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "numberChosen": n => { this.numberChosen = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the number property value. 
     * @returns a Json
     */
    public get number() {
        return this._number;
    };
    /**
     * Sets the number property value. 
     * @param value Value to set for the number property.
     */
    public set number(value: Json | undefined) {
        this._number = value;
    };
    /**
     * Gets the numberChosen property value. 
     * @returns a Json
     */
    public get numberChosen() {
        return this._numberChosen;
    };
    /**
     * Sets the numberChosen property value. 
     * @param value Value to set for the numberChosen property.
     */
    public set numberChosen(value: Json | undefined) {
        this._numberChosen = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("number", this.number);
        writer.writeObjectValue<Json>("numberChosen", this.numberChosen);
        writer.writeAdditionalData(this.additionalData);
    };
}
