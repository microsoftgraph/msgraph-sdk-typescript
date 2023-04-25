import {BrowserSiteListStatus} from './browserSiteListStatus';
import {createBrowserSharedCookieFromDiscriminatorValue} from './createBrowserSharedCookieFromDiscriminatorValue';
import {createBrowserSiteFromDiscriminatorValue} from './createBrowserSiteFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {BrowserSharedCookie, BrowserSite, Entity, IdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * A singleton entity which is used to specify IE mode site list metadata
 */
export class BrowserSiteList extends Entity implements Parsable {
    /** The description of the site list. */
    private _description?: string | undefined;
    /** The name of the site list. */
    private _displayName?: string | undefined;
    /** The user who last modified the site list. */
    private _lastModifiedBy?: IdentitySet | undefined;
    /** The date and time when the site list was last modified. */
    private _lastModifiedDateTime?: Date | undefined;
    /** The user who published the site list. */
    private _publishedBy?: IdentitySet | undefined;
    /** The date and time when the site list was published. */
    private _publishedDateTime?: Date | undefined;
    /** The current revision of the site list. */
    private _revision?: string | undefined;
    /** A collection of shared cookies defined for the site list. */
    private _sharedCookies?: BrowserSharedCookie[] | undefined;
    /** A collection of sites defined for the site list. */
    private _sites?: BrowserSite[] | undefined;
    /** The status property */
    private _status?: BrowserSiteListStatus | undefined;
    /**
     * Instantiates a new browserSiteList and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. The description of the site list.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description of the site list.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. The name of the site list.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the site list.
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
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "lastModifiedBy": n => { this.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "publishedBy": n => { this.publishedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "publishedDateTime": n => { this.publishedDateTime = n.getDateValue(); },
            "revision": n => { this.revision = n.getStringValue(); },
            "sharedCookies": n => { this.sharedCookies = n.getCollectionOfObjectValues<BrowserSharedCookie>(createBrowserSharedCookieFromDiscriminatorValue); },
            "sites": n => { this.sites = n.getCollectionOfObjectValues<BrowserSite>(createBrowserSiteFromDiscriminatorValue); },
            "status": n => { this.status = n.getEnumValue<BrowserSiteListStatus>(BrowserSiteListStatus); },
        };
    };
    /**
     * Gets the lastModifiedBy property value. The user who last modified the site list.
     * @returns a identitySet
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Sets the lastModifiedBy property value. The user who last modified the site list.
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: IdentitySet | undefined) {
        this._lastModifiedBy = value;
    };
    /**
     * Gets the lastModifiedDateTime property value. The date and time when the site list was last modified.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The date and time when the site list was last modified.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the publishedBy property value. The user who published the site list.
     * @returns a identitySet
     */
    public get publishedBy() {
        return this._publishedBy;
    };
    /**
     * Sets the publishedBy property value. The user who published the site list.
     * @param value Value to set for the publishedBy property.
     */
    public set publishedBy(value: IdentitySet | undefined) {
        this._publishedBy = value;
    };
    /**
     * Gets the publishedDateTime property value. The date and time when the site list was published.
     * @returns a Date
     */
    public get publishedDateTime() {
        return this._publishedDateTime;
    };
    /**
     * Sets the publishedDateTime property value. The date and time when the site list was published.
     * @param value Value to set for the publishedDateTime property.
     */
    public set publishedDateTime(value: Date | undefined) {
        this._publishedDateTime = value;
    };
    /**
     * Gets the revision property value. The current revision of the site list.
     * @returns a string
     */
    public get revision() {
        return this._revision;
    };
    /**
     * Sets the revision property value. The current revision of the site list.
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
        super.serialize(writer);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", this.lastModifiedBy);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeObjectValue<IdentitySet>("publishedBy", this.publishedBy);
        writer.writeDateValue("publishedDateTime", this.publishedDateTime);
        writer.writeStringValue("revision", this.revision);
        writer.writeCollectionOfObjectValues<BrowserSharedCookie>("sharedCookies", this.sharedCookies);
        writer.writeCollectionOfObjectValues<BrowserSite>("sites", this.sites);
        writer.writeEnumValue<BrowserSiteListStatus>("status", this.status);
    };
    /**
     * Gets the sharedCookies property value. A collection of shared cookies defined for the site list.
     * @returns a browserSharedCookie
     */
    public get sharedCookies() {
        return this._sharedCookies;
    };
    /**
     * Sets the sharedCookies property value. A collection of shared cookies defined for the site list.
     * @param value Value to set for the sharedCookies property.
     */
    public set sharedCookies(value: BrowserSharedCookie[] | undefined) {
        this._sharedCookies = value;
    };
    /**
     * Gets the sites property value. A collection of sites defined for the site list.
     * @returns a browserSite
     */
    public get sites() {
        return this._sites;
    };
    /**
     * Sets the sites property value. A collection of sites defined for the site list.
     * @param value Value to set for the sites property.
     */
    public set sites(value: BrowserSite[] | undefined) {
        this._sites = value;
    };
    /**
     * Gets the status property value. The status property
     * @returns a browserSiteListStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: BrowserSiteListStatus | undefined) {
        this._status = value;
    };
}
