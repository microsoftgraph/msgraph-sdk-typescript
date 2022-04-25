import {ExternalItemContentType} from './externalItemContentType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ExternalItemContent implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** The type of content in the value property. Possible values are: text, html, unknownFutureValue. These are the content types that the indexer supports, and not the file extension types allowed.  */
    private _type?: ExternalItemContentType | undefined;
    /** The content for the externalItem. Required.  */
    private _value?: string | undefined;
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
     * Instantiates a new externalItemContent and sets the default values.
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
            "type": n => { this.type = n.getEnumValue<ExternalItemContentType>(ExternalItemContentType); },
            "value": n => { this.value = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<ExternalItemContentType>("type", this.type);
        writer.writeStringValue("value", this.value);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the type property value. The type of content in the value property. Possible values are: text, html, unknownFutureValue. These are the content types that the indexer supports, and not the file extension types allowed.
     * @returns a externalItemContentType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type of content in the value property. Possible values are: text, html, unknownFutureValue. These are the content types that the indexer supports, and not the file extension types allowed.
     * @param value Value to set for the type property.
     */
    public set type(value: ExternalItemContentType | undefined) {
        this._type = value;
    };
    /**
     * Gets the value property value. The content for the externalItem. Required.
     * @returns a string
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The content for the externalItem. Required.
     * @param value Value to set for the value property.
     */
    public set value(value: string | undefined) {
        this._value = value;
    };
}
