import {Json} from '../../../../../../../models/';
import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class HyperlinkPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The friendlyName property */
    private _friendlyName?: Json | undefined;
    /** The linkLocation property */
    private _linkLocation?: Json | undefined;
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
     * Instantiates a new hyperlinkPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the friendlyName property value. The friendlyName property
     * @returns a Json
     */
    public get friendlyName() {
        return this._friendlyName;
    };
    /**
     * Sets the friendlyName property value. The friendlyName property
     * @param value Value to set for the friendlyName property.
     */
    public set friendlyName(value: Json | undefined) {
        this._friendlyName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "friendlyName": n => { this.friendlyName = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "linkLocation": n => { this.linkLocation = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the linkLocation property value. The linkLocation property
     * @returns a Json
     */
    public get linkLocation() {
        return this._linkLocation;
    };
    /**
     * Sets the linkLocation property value. The linkLocation property
     * @param value Value to set for the linkLocation property.
     */
    public set linkLocation(value: Json | undefined) {
        this._linkLocation = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("friendlyName", this.friendlyName);
        writer.writeObjectValue<Json>("linkLocation", this.linkLocation);
        writer.writeAdditionalData(this.additionalData);
    };
}
