import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChoosePostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The indexNum property */
    private _indexNum?: Json | undefined;
    /** The values property */
    private _values?: Json | undefined;
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
     * Instantiates a new choosePostRequestBody and sets the default values.
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
            "indexNum": n => { this.indexNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "values": n => { this.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the indexNum property value. The indexNum property
     * @returns a Json
     */
    public get indexNum() {
        return this._indexNum;
    };
    /**
     * Sets the indexNum property value. The indexNum property
     * @param value Value to set for the indexNum property.
     */
    public set indexNum(value: Json | undefined) {
        this._indexNum = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("indexNum", this.indexNum);
        writer.writeObjectValue<Json>("values", this.values);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the values property value. The values property
     * @returns a Json
     */
    public get values() {
        return this._values;
    };
    /**
     * Sets the values property value. The values property
     * @param value Value to set for the values property.
     */
    public set values(value: Json | undefined) {
        this._values = value;
    };
}
