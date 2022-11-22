import {PhoneType} from './phoneType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Phone implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The language property */
    private _language?: string | undefined;
    /** The phone number. */
    private _number?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The region property */
    private _region?: string | undefined;
    /** The type of phone number. The possible values are: home, business, mobile, other, assistant, homeFax, businessFax, otherFax, pager, radio. */
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
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "language": n => { this.language = n.getStringValue(); },
            "number": n => { this.number = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "region": n => { this.region = n.getStringValue(); },
            "type": n => { this.type = n.getEnumValue<PhoneType>(PhoneType); },
        };
    };
    /**
     * Gets the language property value. The language property
     * @returns a string
     */
    public get language() {
        return this._language;
    };
    /**
     * Sets the language property value. The language property
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
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the region property value. The region property
     * @returns a string
     */
    public get region() {
        return this._region;
    };
    /**
     * Sets the region property value. The region property
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
        writer.writeStringValue("@odata.type", this.odataType);
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
