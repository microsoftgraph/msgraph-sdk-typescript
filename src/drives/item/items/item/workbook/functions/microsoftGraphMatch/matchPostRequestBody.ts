import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MatchPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The lookupArray property */
    private _lookupArray?: Json | undefined;
    /** The lookupValue property */
    private _lookupValue?: Json | undefined;
    /** The matchType property */
    private _matchType?: Json | undefined;
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
     * Instantiates a new matchPostRequestBody and sets the default values.
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
            "lookupArray": n => { this.lookupArray = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "lookupValue": n => { this.lookupValue = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "matchType": n => { this.matchType = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the lookupArray property value. The lookupArray property
     * @returns a Json
     */
    public get lookupArray() {
        return this._lookupArray;
    };
    /**
     * Sets the lookupArray property value. The lookupArray property
     * @param value Value to set for the lookupArray property.
     */
    public set lookupArray(value: Json | undefined) {
        this._lookupArray = value;
    };
    /**
     * Gets the lookupValue property value. The lookupValue property
     * @returns a Json
     */
    public get lookupValue() {
        return this._lookupValue;
    };
    /**
     * Sets the lookupValue property value. The lookupValue property
     * @param value Value to set for the lookupValue property.
     */
    public set lookupValue(value: Json | undefined) {
        this._lookupValue = value;
    };
    /**
     * Gets the matchType property value. The matchType property
     * @returns a Json
     */
    public get matchType() {
        return this._matchType;
    };
    /**
     * Sets the matchType property value. The matchType property
     * @param value Value to set for the matchType property.
     */
    public set matchType(value: Json | undefined) {
        this._matchType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("lookupArray", this.lookupArray);
        writer.writeObjectValue<Json>("lookupValue", this.lookupValue);
        writer.writeObjectValue<Json>("matchType", this.matchType);
        writer.writeAdditionalData(this.additionalData);
    };
}
