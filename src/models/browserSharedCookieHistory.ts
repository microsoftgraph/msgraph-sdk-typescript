import {BrowserSharedCookieSourceEnvironment} from './browserSharedCookieSourceEnvironment';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BrowserSharedCookieHistory implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The comment for the shared cookie. */
    private _comment?: string | undefined;
    /** The name of the cookie. */
    private _displayName?: string | undefined;
    /** Controls whether a cookie is a host-only or domain cookie. */
    private _hostOnly?: boolean | undefined;
    /** The URL of the cookie. */
    private _hostOrDomain?: string | undefined;
    /** The lastModifiedBy property */
    private _lastModifiedBy?: IdentitySet | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The path of the cookie. */
    private _path?: string | undefined;
    /** The date and time when the cookie was last published. */
    private _publishedDateTime?: Date | undefined;
    /** Specifies how the cookies are shared between Microsoft Edge and Internet Explorer. The possible values are: microsoftEdge, internetExplorer11, both, unknownFutureValue. */
    private _sourceEnvironment?: BrowserSharedCookieSourceEnvironment | undefined;
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
     * Gets the comment property value. The comment for the shared cookie.
     * @returns a string
     */
    public get comment() {
        return this._comment;
    };
    /**
     * Sets the comment property value. The comment for the shared cookie.
     * @param value Value to set for the comment property.
     */
    public set comment(value: string | undefined) {
        this._comment = value;
    };
    /**
     * Instantiates a new browserSharedCookieHistory and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the displayName property value. The name of the cookie.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the cookie.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "comment": n => { this.comment = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "hostOnly": n => { this.hostOnly = n.getBooleanValue(); },
            "hostOrDomain": n => { this.hostOrDomain = n.getStringValue(); },
            "lastModifiedBy": n => { this.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "path": n => { this.path = n.getStringValue(); },
            "publishedDateTime": n => { this.publishedDateTime = n.getDateValue(); },
            "sourceEnvironment": n => { this.sourceEnvironment = n.getEnumValue<BrowserSharedCookieSourceEnvironment>(BrowserSharedCookieSourceEnvironment); },
        };
    };
    /**
     * Gets the hostOnly property value. Controls whether a cookie is a host-only or domain cookie.
     * @returns a boolean
     */
    public get hostOnly() {
        return this._hostOnly;
    };
    /**
     * Sets the hostOnly property value. Controls whether a cookie is a host-only or domain cookie.
     * @param value Value to set for the hostOnly property.
     */
    public set hostOnly(value: boolean | undefined) {
        this._hostOnly = value;
    };
    /**
     * Gets the hostOrDomain property value. The URL of the cookie.
     * @returns a string
     */
    public get hostOrDomain() {
        return this._hostOrDomain;
    };
    /**
     * Sets the hostOrDomain property value. The URL of the cookie.
     * @param value Value to set for the hostOrDomain property.
     */
    public set hostOrDomain(value: string | undefined) {
        this._hostOrDomain = value;
    };
    /**
     * Gets the lastModifiedBy property value. The lastModifiedBy property
     * @returns a identitySet
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Sets the lastModifiedBy property value. The lastModifiedBy property
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: IdentitySet | undefined) {
        this._lastModifiedBy = value;
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
     * Gets the path property value. The path of the cookie.
     * @returns a string
     */
    public get path() {
        return this._path;
    };
    /**
     * Sets the path property value. The path of the cookie.
     * @param value Value to set for the path property.
     */
    public set path(value: string | undefined) {
        this._path = value;
    };
    /**
     * Gets the publishedDateTime property value. The date and time when the cookie was last published.
     * @returns a Date
     */
    public get publishedDateTime() {
        return this._publishedDateTime;
    };
    /**
     * Sets the publishedDateTime property value. The date and time when the cookie was last published.
     * @param value Value to set for the publishedDateTime property.
     */
    public set publishedDateTime(value: Date | undefined) {
        this._publishedDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("comment", this.comment);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("hostOnly", this.hostOnly);
        writer.writeStringValue("hostOrDomain", this.hostOrDomain);
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", this.lastModifiedBy);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("path", this.path);
        writer.writeDateValue("publishedDateTime", this.publishedDateTime);
        writer.writeEnumValue<BrowserSharedCookieSourceEnvironment>("sourceEnvironment", this.sourceEnvironment);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sourceEnvironment property value. Specifies how the cookies are shared between Microsoft Edge and Internet Explorer. The possible values are: microsoftEdge, internetExplorer11, both, unknownFutureValue.
     * @returns a browserSharedCookieSourceEnvironment
     */
    public get sourceEnvironment() {
        return this._sourceEnvironment;
    };
    /**
     * Sets the sourceEnvironment property value. Specifies how the cookies are shared between Microsoft Edge and Internet Explorer. The possible values are: microsoftEdge, internetExplorer11, both, unknownFutureValue.
     * @param value Value to set for the sourceEnvironment property.
     */
    public set sourceEnvironment(value: BrowserSharedCookieSourceEnvironment | undefined) {
        this._sourceEnvironment = value;
    };
}
