import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LookupPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _lookupValue?: Json | undefined;
    private _lookupVector?: Json | undefined;
    private _resultVector?: Json | undefined;
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
     * Instantiates a new lookupPostRequestBody and sets the default values.
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
            "lookupValue": n => { this.lookupValue = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "lookupVector": n => { this.lookupVector = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "resultVector": n => { this.resultVector = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the lookupValue property value. 
     * @returns a Json
     */
    public get lookupValue() {
        return this._lookupValue;
    };
    /**
     * Sets the lookupValue property value. 
     * @param value Value to set for the lookupValue property.
     */
    public set lookupValue(value: Json | undefined) {
        this._lookupValue = value;
    };
    /**
     * Gets the lookupVector property value. 
     * @returns a Json
     */
    public get lookupVector() {
        return this._lookupVector;
    };
    /**
     * Sets the lookupVector property value. 
     * @param value Value to set for the lookupVector property.
     */
    public set lookupVector(value: Json | undefined) {
        this._lookupVector = value;
    };
    /**
     * Gets the resultVector property value. 
     * @returns a Json
     */
    public get resultVector() {
        return this._resultVector;
    };
    /**
     * Sets the resultVector property value. 
     * @param value Value to set for the resultVector property.
     */
    public set resultVector(value: Json | undefined) {
        this._resultVector = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("lookupValue", this.lookupValue);
        writer.writeObjectValue<Json>("lookupVector", this.lookupVector);
        writer.writeObjectValue<Json>("resultVector", this.resultVector);
        writer.writeAdditionalData(this.additionalData);
    };
}
