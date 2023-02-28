import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class NegBinom_DistPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The cumulative property */
    private _cumulative?: Json | undefined;
    /** The numberF property */
    private _numberF?: Json | undefined;
    /** The numberS property */
    private _numberS?: Json | undefined;
    /** The probabilityS property */
    private _probabilityS?: Json | undefined;
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
     * Instantiates a new negBinom_DistPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the cumulative property value. The cumulative property
     * @returns a Json
     */
    public get cumulative() {
        return this._cumulative;
    };
    /**
     * Sets the cumulative property value. The cumulative property
     * @param value Value to set for the cumulative property.
     */
    public set cumulative(value: Json | undefined) {
        this._cumulative = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "cumulative": n => { this.cumulative = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "numberF": n => { this.numberF = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "numberS": n => { this.numberS = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "probabilityS": n => { this.probabilityS = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the numberF property value. The numberF property
     * @returns a Json
     */
    public get numberF() {
        return this._numberF;
    };
    /**
     * Sets the numberF property value. The numberF property
     * @param value Value to set for the numberF property.
     */
    public set numberF(value: Json | undefined) {
        this._numberF = value;
    };
    /**
     * Gets the numberS property value. The numberS property
     * @returns a Json
     */
    public get numberS() {
        return this._numberS;
    };
    /**
     * Sets the numberS property value. The numberS property
     * @param value Value to set for the numberS property.
     */
    public set numberS(value: Json | undefined) {
        this._numberS = value;
    };
    /**
     * Gets the probabilityS property value. The probabilityS property
     * @returns a Json
     */
    public get probabilityS() {
        return this._probabilityS;
    };
    /**
     * Sets the probabilityS property value. The probabilityS property
     * @param value Value to set for the probabilityS property.
     */
    public set probabilityS(value: Json | undefined) {
        this._probabilityS = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("cumulative", this.cumulative);
        writer.writeObjectValue<Json>("numberF", this.numberF);
        writer.writeObjectValue<Json>("numberS", this.numberS);
        writer.writeObjectValue<Json>("probabilityS", this.probabilityS);
        writer.writeAdditionalData(this.additionalData);
    };
}
