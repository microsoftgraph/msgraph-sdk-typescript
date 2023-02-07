import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SeriesSumPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The coefficients property */
    private _coefficients?: Json | undefined;
    /** The m property */
    private _m?: Json | undefined;
    /** The n property */
    private _n?: Json | undefined;
    /** The x property */
    private _x?: Json | undefined;
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
     * Gets the coefficients property value. The coefficients property
     * @returns a Json
     */
    public get coefficients() {
        return this._coefficients;
    };
    /**
     * Sets the coefficients property value. The coefficients property
     * @param value Value to set for the coefficients property.
     */
    public set coefficients(value: Json | undefined) {
        this._coefficients = value;
    };
    /**
     * Instantiates a new seriesSumPostRequestBody and sets the default values.
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
            "coefficients": n => { this.coefficients = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "m": n => { this.m = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "n": n => { this.n = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "x": n => { this.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the m property value. The m property
     * @returns a Json
     */
    public get m() {
        return this._m;
    };
    /**
     * Sets the m property value. The m property
     * @param value Value to set for the m property.
     */
    public set m(value: Json | undefined) {
        this._m = value;
    };
    /**
     * Gets the n property value. The n property
     * @returns a Json
     */
    public get n() {
        return this._n;
    };
    /**
     * Sets the n property value. The n property
     * @param value Value to set for the n property.
     */
    public set n(value: Json | undefined) {
        this._n = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("coefficients", this.coefficients);
        writer.writeObjectValue<Json>("m", this.m);
        writer.writeObjectValue<Json>("n", this.n);
        writer.writeObjectValue<Json>("x", this.x);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the x property value. The x property
     * @returns a Json
     */
    public get x() {
        return this._x;
    };
    /**
     * Sets the x property value. The x property
     * @param value Value to set for the x property.
     */
    public set x(value: Json | undefined) {
        this._x = value;
    };
}
