import {BrowserSharedCookie, BrowserSite} from '../../../../../../models/';
import {createBrowserSharedCookieFromDiscriminatorValue} from '../../../../../../models/createBrowserSharedCookieFromDiscriminatorValue';
import {createBrowserSiteFromDiscriminatorValue} from '../../../../../../models/createBrowserSiteFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PublishPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The revision property */
    private _revision?: string | undefined;
    /** The sharedCookies property */
    private _sharedCookies?: BrowserSharedCookie[] | undefined;
    /** The sites property */
    private _sites?: BrowserSite[] | undefined;
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
     * Instantiates a new publishPostRequestBody and sets the default values.
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
            "revision": n => { this.revision = n.getStringValue(); },
            "sharedCookies": n => { this.sharedCookies = n.getCollectionOfObjectValues<BrowserSharedCookie>(createBrowserSharedCookieFromDiscriminatorValue); },
            "sites": n => { this.sites = n.getCollectionOfObjectValues<BrowserSite>(createBrowserSiteFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the revision property value. The revision property
     * @returns a string
     */
    public get revision() {
        return this._revision;
    };
    /**
     * Sets the revision property value. The revision property
     * @param value Value to set for the revision property.
     */
    public set revision(value: string | undefined) {
        this._revision = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("revision", this.revision);
        writer.writeCollectionOfObjectValues<BrowserSharedCookie>("sharedCookies", this.sharedCookies);
        writer.writeCollectionOfObjectValues<BrowserSite>("sites", this.sites);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sharedCookies property value. The sharedCookies property
     * @returns a browserSharedCookie
     */
    public get sharedCookies() {
        return this._sharedCookies;
    };
    /**
     * Sets the sharedCookies property value. The sharedCookies property
     * @param value Value to set for the sharedCookies property.
     */
    public set sharedCookies(value: BrowserSharedCookie[] | undefined) {
        this._sharedCookies = value;
    };
    /**
     * Gets the sites property value. The sites property
     * @returns a browserSite
     */
    public get sites() {
        return this._sites;
    };
    /**
     * Sets the sites property value. The sites property
     * @param value Value to set for the sites property.
     */
    public set sites(value: BrowserSite[] | undefined) {
        this._sites = value;
    };
}
