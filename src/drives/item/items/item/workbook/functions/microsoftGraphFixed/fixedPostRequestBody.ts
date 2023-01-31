import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FixedPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _decimals?: Json | undefined;
    private _noCommas?: Json | undefined;
    private _number?: Json | undefined;
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
     * Instantiates a new fixedPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the decimals property value. 
     * @returns a Json
     */
    public get decimals() {
        return this._decimals;
    };
    /**
     * Sets the decimals property value. 
     * @param value Value to set for the decimals property.
     */
    public set decimals(value: Json | undefined) {
        this._decimals = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "decimals": n => { this.decimals = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "noCommas": n => { this.noCommas = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "number": n => { this.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the noCommas property value. 
     * @returns a Json
     */
    public get noCommas() {
        return this._noCommas;
    };
    /**
     * Sets the noCommas property value. 
     * @param value Value to set for the noCommas property.
     */
    public set noCommas(value: Json | undefined) {
        this._noCommas = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("decimals", this.decimals);
        writer.writeObjectValue<Json>("noCommas", this.noCommas);
        writer.writeObjectValue<Json>("number", this.number);
        writer.writeAdditionalData(this.additionalData);
    };
}
