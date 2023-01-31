import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class VlookupPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _colIndexNum?: Json | undefined;
    private _lookupValue?: Json | undefined;
    private _rangeLookup?: Json | undefined;
    private _tableArray?: Json | undefined;
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
     * Gets the colIndexNum property value. 
     * @returns a Json
     */
    public get colIndexNum() {
        return this._colIndexNum;
    };
    /**
     * Sets the colIndexNum property value. 
     * @param value Value to set for the colIndexNum property.
     */
    public set colIndexNum(value: Json | undefined) {
        this._colIndexNum = value;
    };
    /**
     * Instantiates a new vlookupPostRequestBody and sets the default values.
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
            "colIndexNum": n => { this.colIndexNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "lookupValue": n => { this.lookupValue = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "rangeLookup": n => { this.rangeLookup = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "tableArray": n => { this.tableArray = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
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
     * Gets the rangeLookup property value. 
     * @returns a Json
     */
    public get rangeLookup() {
        return this._rangeLookup;
    };
    /**
     * Sets the rangeLookup property value. 
     * @param value Value to set for the rangeLookup property.
     */
    public set rangeLookup(value: Json | undefined) {
        this._rangeLookup = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("colIndexNum", this.colIndexNum);
        writer.writeObjectValue<Json>("lookupValue", this.lookupValue);
        writer.writeObjectValue<Json>("rangeLookup", this.rangeLookup);
        writer.writeObjectValue<Json>("tableArray", this.tableArray);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the tableArray property value. 
     * @returns a Json
     */
    public get tableArray() {
        return this._tableArray;
    };
    /**
     * Sets the tableArray property value. 
     * @param value Value to set for the tableArray property.
     */
    public set tableArray(value: Json | undefined) {
        this._tableArray = value;
    };
}
