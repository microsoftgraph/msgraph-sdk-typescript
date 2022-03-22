import {PhoneType} from './phoneType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Phone implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    private _language?: string | undefined;
    /** The phone number.  */
    private _number?: string | undefined;
    private _region?: string | undefined;
    /** The type of phone number. The possible values are: home, business, mobile, other, assistant, homeFax, businessFax, otherFax, pager, radio.  */
    private _type?: PhoneType | undefined;
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
     * Instantiates a new phone and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "language": (o, n) => { (o as unknown as Phone).language = n.getStringValue(); },
            "number": (o, n) => { (o as unknown as Phone).number = n.getStringValue(); },
            "region": (o, n) => { (o as unknown as Phone).region = n.getStringValue(); },
            "type": (o, n) => { (o as unknown as Phone).type = n.getEnumValue<PhoneType>(PhoneType); },
        };
    };
    /**
     * Gets the language property value. 
     * @returns a string
     */
    public get language() {
        return this._language;
    };
    /**
     * Sets the language property value. 
     * @param value Value to set for the language property.
     */
    public set language(value: string | undefined) {
        this._language = value;
    };
    /**
     * Gets the number property value. The phone number.
     * @returns a string
     */
    public get number() {
        return this._number;
    };
    /**
     * Sets the number property value. The phone number.
     * @param value Value to set for the number property.
     */
    public set number(value: string | undefined) {
        this._number = value;
    };
    /**
     * Gets the region property value. 
     * @returns a string
     */
    public get region() {
        return this._region;
    };
    /**
     * Sets the region property value. 
     * @param value Value to set for the region property.
     */
    public set region(value: string | undefined) {
        this._region = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("language", this.language);
        writer.writeStringValue("number", this.number);
        writer.writeStringValue("region", this.region);
        writer.writeEnumValue<PhoneType>("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the type property value. The type of phone number. The possible values are: home, business, mobile, other, assistant, homeFax, businessFax, otherFax, pager, radio.
     * @returns a phoneType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type of phone number. The possible values are: home, business, mobile, other, assistant, homeFax, businessFax, otherFax, pager, radio.
     * @param value Value to set for the type property.
     */
    public set type(value: PhoneType | undefined) {
        this._type = value;
    };
}
