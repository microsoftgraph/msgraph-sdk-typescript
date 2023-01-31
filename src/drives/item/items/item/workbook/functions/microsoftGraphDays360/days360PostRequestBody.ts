import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Days360PostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _endDate?: Json | undefined;
    private _method?: Json | undefined;
    private _startDate?: Json | undefined;
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
     * Instantiates a new days360PostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the endDate property value. 
     * @returns a Json
     */
    public get endDate() {
        return this._endDate;
    };
    /**
     * Sets the endDate property value. 
     * @param value Value to set for the endDate property.
     */
    public set endDate(value: Json | undefined) {
        this._endDate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "endDate": n => { this.endDate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "method": n => { this.method = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "startDate": n => { this.startDate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the method property value. 
     * @returns a Json
     */
    public get method() {
        return this._method;
    };
    /**
     * Sets the method property value. 
     * @param value Value to set for the method property.
     */
    public set method(value: Json | undefined) {
        this._method = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("endDate", this.endDate);
        writer.writeObjectValue<Json>("method", this.method);
        writer.writeObjectValue<Json>("startDate", this.startDate);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the startDate property value. 
     * @returns a Json
     */
    public get startDate() {
        return this._startDate;
    };
    /**
     * Sets the startDate property value. 
     * @param value Value to set for the startDate property.
     */
    public set startDate(value: Json | undefined) {
        this._startDate = value;
    };
}
