import {WebsiteType} from './websiteType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Website implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** The URL of the website.  */
    private _address?: string | undefined;
    /** The display name of the web site.  */
    private _displayName?: string | undefined;
    /** The possible values are: other, home, work, blog, profile.  */
    private _type?: WebsiteType | undefined;
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
     * Gets the address property value. The URL of the website.
     * @returns a string
     */
    public get address() {
        return this._address;
    };
    /**
     * Sets the address property value. The URL of the website.
     * @param value Value to set for the address property.
     */
    public set address(value: string | undefined) {
        this._address = value;
    };
    /**
     * Instantiates a new website and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the displayName property value. The display name of the web site.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name of the web site.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "address": (o, n) => { (o as unknown as Website).address = n.getStringValue(); },
            "displayName": (o, n) => { (o as unknown as Website).displayName = n.getStringValue(); },
            "type": (o, n) => { (o as unknown as Website).type = n.getEnumValue<WebsiteType>(WebsiteType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("address", this.address);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeEnumValue<WebsiteType>("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the type property value. The possible values are: other, home, work, blog, profile.
     * @returns a websiteType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The possible values are: other, home, work, blog, profile.
     * @param value Value to set for the type property.
     */
    public set type(value: WebsiteType | undefined) {
        this._type = value;
    };
}
