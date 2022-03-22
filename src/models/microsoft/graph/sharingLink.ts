import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {Identity} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SharingLink implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** The app the link is associated with.  */
    private _application?: Identity | undefined;
    /** If true then the user can only use this link to view the item on the web, and cannot use it to download the contents of the item. Only for OneDrive for Business and SharePoint.  */
    private _preventsDownload?: boolean | undefined;
    /** The scope of the link represented by this permission. Value anonymous indicates the link is usable by anyone, organization indicates the link is only usable for users signed into the same tenant.  */
    private _scope?: string | undefined;
    /** The type of the link created.  */
    private _type?: string | undefined;
    /** For embed links, this property contains the HTML code for an <iframe> element that will embed the item in a webpage.  */
    private _webHtml?: string | undefined;
    /** A URL that opens the item in the browser on the OneDrive website.  */
    private _webUrl?: string | undefined;
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
     * Gets the application property value. The app the link is associated with.
     * @returns a identity
     */
    public get application() {
        return this._application;
    };
    /**
     * Sets the application property value. The app the link is associated with.
     * @param value Value to set for the application property.
     */
    public set application(value: Identity | undefined) {
        this._application = value;
    };
    /**
     * Instantiates a new sharingLink and sets the default values.
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
            "application": (o, n) => { (o as unknown as SharingLink).application = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); },
            "preventsDownload": (o, n) => { (o as unknown as SharingLink).preventsDownload = n.getBooleanValue(); },
            "scope": (o, n) => { (o as unknown as SharingLink).scope = n.getStringValue(); },
            "type": (o, n) => { (o as unknown as SharingLink).type = n.getStringValue(); },
            "webHtml": (o, n) => { (o as unknown as SharingLink).webHtml = n.getStringValue(); },
            "webUrl": (o, n) => { (o as unknown as SharingLink).webUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the preventsDownload property value. If true then the user can only use this link to view the item on the web, and cannot use it to download the contents of the item. Only for OneDrive for Business and SharePoint.
     * @returns a boolean
     */
    public get preventsDownload() {
        return this._preventsDownload;
    };
    /**
     * Sets the preventsDownload property value. If true then the user can only use this link to view the item on the web, and cannot use it to download the contents of the item. Only for OneDrive for Business and SharePoint.
     * @param value Value to set for the preventsDownload property.
     */
    public set preventsDownload(value: boolean | undefined) {
        this._preventsDownload = value;
    };
    /**
     * Gets the scope property value. The scope of the link represented by this permission. Value anonymous indicates the link is usable by anyone, organization indicates the link is only usable for users signed into the same tenant.
     * @returns a string
     */
    public get scope() {
        return this._scope;
    };
    /**
     * Sets the scope property value. The scope of the link represented by this permission. Value anonymous indicates the link is usable by anyone, organization indicates the link is only usable for users signed into the same tenant.
     * @param value Value to set for the scope property.
     */
    public set scope(value: string | undefined) {
        this._scope = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Identity>("application", this.application);
        writer.writeBooleanValue("preventsDownload", this.preventsDownload);
        writer.writeStringValue("scope", this.scope);
        writer.writeStringValue("type", this.type);
        writer.writeStringValue("webHtml", this.webHtml);
        writer.writeStringValue("webUrl", this.webUrl);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the type property value. The type of the link created.
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type of the link created.
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
    /**
     * Gets the webHtml property value. For embed links, this property contains the HTML code for an <iframe> element that will embed the item in a webpage.
     * @returns a string
     */
    public get webHtml() {
        return this._webHtml;
    };
    /**
     * Sets the webHtml property value. For embed links, this property contains the HTML code for an <iframe> element that will embed the item in a webpage.
     * @param value Value to set for the webHtml property.
     */
    public set webHtml(value: string | undefined) {
        this._webHtml = value;
    };
    /**
     * Gets the webUrl property value. A URL that opens the item in the browser on the OneDrive website.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. A URL that opens the item in the browser on the OneDrive website.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
