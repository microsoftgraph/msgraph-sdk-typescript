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
    /** Description for the site list */
    private _description?: string | undefined;
    /** Display name of this site list */
    private _displayName?: string | undefined;
    /** Name of the admin who made the last update on the site list */
    private _lastModifiedBy?: IdentitySet | undefined;
    /** The datetime that the admin last updated the site list. */
    private _lastModifiedDateTime?: Date | undefined;
    /** Name of the admin who published the site list */
    private _publishedBy?: IdentitySet | undefined;
    /** The datetime that admin published the site list to users in their organization. */
    private _publishedDateTime?: Date | undefined;
    /** Admin can have multiple revisions of the site list and the revision is generated whenever admin create/update the site list. */
    private _revision?: string | undefined;
    /** The sharedCookies property */
    private _sharedCookies?: BrowserSharedCookie[] | undefined;
    /** The sites property */
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
     * Gets the description property value. Description for the site list
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description for the site list
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. Display name of this site list
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name of this site list
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
     * Gets the lastModifiedBy property value. Name of the admin who made the last update on the site list
     * @returns a identitySet
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Sets the lastModifiedBy property value. Name of the admin who made the last update on the site list
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: IdentitySet | undefined) {
        this._lastModifiedBy = value;
    };
    /**
     * Gets the lastModifiedDateTime property value. The datetime that the admin last updated the site list.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The datetime that the admin last updated the site list.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the publishedBy property value. Name of the admin who published the site list
     * @returns a identitySet
     */
    public get publishedBy() {
        return this._publishedBy;
    };
    /**
     * Sets the publishedBy property value. Name of the admin who published the site list
     * @param value Value to set for the publishedBy property.
     */
    public set publishedBy(value: IdentitySet | undefined) {
        this._publishedBy = value;
    };
    /**
     * Gets the publishedDateTime property value. The datetime that admin published the site list to users in their organization.
     * @returns a Date
     */
    public get publishedDateTime() {
        return this._publishedDateTime;
    };
    /**
     * Sets the publishedDateTime property value. The datetime that admin published the site list to users in their organization.
     * @param value Value to set for the publishedDateTime property.
     */
    public set publishedDateTime(value: Date | undefined) {
        this._publishedDateTime = value;
    };
    /**
     * Gets the revision property value. Admin can have multiple revisions of the site list and the revision is generated whenever admin create/update the site list.
     * @returns a string
     */
    public get revision() {
        return this._revision;
    };
    /**
     * Sets the revision property value. Admin can have multiple revisions of the site list and the revision is generated whenever admin create/update the site list.
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
