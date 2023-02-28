import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Rank_AvgPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The number property */
    private _number?: Json | undefined;
    /** The order property */
    private _order?: Json | undefined;
    /** The ref property */
    private _ref?: Json | undefined;
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
     * Instantiates a new rank_AvgPostRequestBody and sets the default values.
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
            "order": n => { this.order = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "ref": n => { this.ref = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the number property value. The number property
     * @returns a Json
     */
    public get number() {
        return this._number;
    };
    /**
     * Sets the number property value. The number property
     * @param value Value to set for the number property.
     */
    public set number(value: Json | undefined) {
        this._number = value;
    };
    /**
     * Gets the order property value. The order property
     * @returns a Json
     */
    public get order() {
        return this._order;
    };
    /**
     * Sets the order property value. The order property
     * @param value Value to set for the order property.
     */
    public set order(value: Json | undefined) {
        this._order = value;
    };
    /**
     * Gets the ref property value. The ref property
     * @returns a Json
     */
    public get ref() {
        return this._ref;
    };
    /**
     * Sets the ref property value. The ref property
     * @param value Value to set for the ref property.
     */
    public set ref(value: Json | undefined) {
        this._ref = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("number", this.number);
        writer.writeObjectValue<Json>("order", this.order);
        writer.writeObjectValue<Json>("ref", this.ref);
        writer.writeAdditionalData(this.additionalData);
    };
}
