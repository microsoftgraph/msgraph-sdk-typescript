import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TbillYieldPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _maturity?: Json | undefined;
    private _pr?: Json | undefined;
    private _settlement?: Json | undefined;
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
     * Instantiates a new tbillYieldPostRequestBody and sets the default values.
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
            "maturity": n => { this.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "pr": n => { this.pr = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "settlement": n => { this.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the maturity property value. 
     * @returns a Json
     */
    public get maturity() {
        return this._maturity;
    };
    /**
     * Sets the maturity property value. 
     * @param value Value to set for the maturity property.
     */
    public set maturity(value: Json | undefined) {
        this._maturity = value;
    };
    /**
     * Gets the pr property value. 
     * @returns a Json
     */
    public get pr() {
        return this._pr;
    };
    /**
     * Sets the pr property value. 
     * @param value Value to set for the pr property.
     */
    public set pr(value: Json | undefined) {
        this._pr = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("maturity", this.maturity);
        writer.writeObjectValue<Json>("pr", this.pr);
        writer.writeObjectValue<Json>("settlement", this.settlement);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the settlement property value. 
     * @returns a Json
     */
    public get settlement() {
        return this._settlement;
    };
    /**
     * Sets the settlement property value. 
     * @param value Value to set for the settlement property.
     */
    public set settlement(value: Json | undefined) {
        this._settlement = value;
    };
}
