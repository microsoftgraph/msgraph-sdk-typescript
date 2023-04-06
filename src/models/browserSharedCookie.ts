import {BrowserSharedCookieSourceEnvironment} from './browserSharedCookieSourceEnvironment';
import {BrowserSharedCookieStatus} from './browserSharedCookieStatus';
import {createBrowserSharedCookieHistoryFromDiscriminatorValue} from './createBrowserSharedCookieHistoryFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {BrowserSharedCookieHistory, Entity, IdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BrowserSharedCookie extends Entity implements Parsable {
    /** The comment of the cookie */
    private _comment?: string | undefined;
    /** The datetime that the admin created the cookie */
    private _createdDateTime?: Date | undefined;
    /** The datetime that the admin deleted the cookie */
    private _deletedDateTime?: Date | undefined;
    /** The name of the cookie */
    private _displayName?: string | undefined;
    /** The history of the cookie */
    private _history?: BrowserSharedCookieHistory[] | undefined;
    /** Boolean attribute that determines whether a cookie is  a host-only or domain cookie */
    private _hostOnly?: boolean | undefined;
    /** The URL of the cookie */
    private _hostOrDomain?: string | undefined;
    /** The identity of the admin who last updated the cookie */
    private _lastModifiedBy?: IdentitySet | undefined;
    /** The datetime that the admin last updated the cookie */
    private _lastModifiedDateTime?: Date | undefined;
    /** The path of the cookie */
    private _path?: string | undefined;
    /** The sourceEnvironment property */
    private _sourceEnvironment?: BrowserSharedCookieSourceEnvironment | undefined;
    /** The status property */
    private _status?: BrowserSharedCookieStatus | undefined;
    /**
     * Gets the comment property value. The comment of the cookie
     * @returns a string
     */
    public get comment() {
        return this._comment;
    };
    /**
     * Sets the comment property value. The comment of the cookie
     * @param value Value to set for the comment property.
     */
    public set comment(value: string | undefined) {
        this._comment = value;
    };
    /**
     * Instantiates a new browserSharedCookie and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The datetime that the admin created the cookie
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The datetime that the admin created the cookie
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the deletedDateTime property value. The datetime that the admin deleted the cookie
     * @returns a Date
     */
    public get deletedDateTime() {
        return this._deletedDateTime;
    };
    /**
     * Sets the deletedDateTime property value. The datetime that the admin deleted the cookie
     * @param value Value to set for the deletedDateTime property.
     */
    public set deletedDateTime(value: Date | undefined) {
        this._deletedDateTime = value;
    };
    /**
     * Gets the displayName property value. The name of the cookie
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the cookie
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
            "comment": n => { this.comment = n.getStringValue(); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "deletedDateTime": n => { this.deletedDateTime = n.getDateValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "history": n => { this.history = n.getCollectionOfObjectValues<BrowserSharedCookieHistory>(createBrowserSharedCookieHistoryFromDiscriminatorValue); },
            "hostOnly": n => { this.hostOnly = n.getBooleanValue(); },
            "hostOrDomain": n => { this.hostOrDomain = n.getStringValue(); },
            "lastModifiedBy": n => { this.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "path": n => { this.path = n.getStringValue(); },
            "sourceEnvironment": n => { this.sourceEnvironment = n.getEnumValue<BrowserSharedCookieSourceEnvironment>(BrowserSharedCookieSourceEnvironment); },
            "status": n => { this.status = n.getEnumValue<BrowserSharedCookieStatus>(BrowserSharedCookieStatus); },
        };
    };
    /**
     * Gets the history property value. The history of the cookie
     * @returns a browserSharedCookieHistory
     */
    public get history() {
        return this._history;
    };
    /**
     * Sets the history property value. The history of the cookie
     * @param value Value to set for the history property.
     */
    public set history(value: BrowserSharedCookieHistory[] | undefined) {
        this._history = value;
    };
    /**
     * Gets the hostOnly property value. Boolean attribute that determines whether a cookie is  a host-only or domain cookie
     * @returns a boolean
     */
    public get hostOnly() {
        return this._hostOnly;
    };
    /**
     * Sets the hostOnly property value. Boolean attribute that determines whether a cookie is  a host-only or domain cookie
     * @param value Value to set for the hostOnly property.
     */
    public set hostOnly(value: boolean | undefined) {
        this._hostOnly = value;
    };
    /**
     * Gets the hostOrDomain property value. The URL of the cookie
     * @returns a string
     */
    public get hostOrDomain() {
        return this._hostOrDomain;
    };
    /**
     * Sets the hostOrDomain property value. The URL of the cookie
     * @param value Value to set for the hostOrDomain property.
     */
    public set hostOrDomain(value: string | undefined) {
        this._hostOrDomain = value;
    };
    /**
     * Gets the lastModifiedBy property value. The identity of the admin who last updated the cookie
     * @returns a identitySet
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Sets the lastModifiedBy property value. The identity of the admin who last updated the cookie
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: IdentitySet | undefined) {
        this._lastModifiedBy = value;
    };
    /**
     * Gets the lastModifiedDateTime property value. The datetime that the admin last updated the cookie
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The datetime that the admin last updated the cookie
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the path property value. The path of the cookie
     * @returns a string
     */
    public get path() {
        return this._path;
    };
    /**
     * Sets the path property value. The path of the cookie
     * @param value Value to set for the path property.
     */
    public set path(value: string | undefined) {
        this._path = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("comment", this.comment);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeDateValue("deletedDateTime", this.deletedDateTime);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<BrowserSharedCookieHistory>("history", this.history);
        writer.writeBooleanValue("hostOnly", this.hostOnly);
        writer.writeStringValue("hostOrDomain", this.hostOrDomain);
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", this.lastModifiedBy);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("path", this.path);
        writer.writeEnumValue<BrowserSharedCookieSourceEnvironment>("sourceEnvironment", this.sourceEnvironment);
        writer.writeEnumValue<BrowserSharedCookieStatus>("status", this.status);
    };
    /**
     * Gets the sourceEnvironment property value. The sourceEnvironment property
     * @returns a browserSharedCookieSourceEnvironment
     */
    public get sourceEnvironment() {
        return this._sourceEnvironment;
    };
    /**
     * Sets the sourceEnvironment property value. The sourceEnvironment property
     * @param value Value to set for the sourceEnvironment property.
     */
    public set sourceEnvironment(value: BrowserSharedCookieSourceEnvironment | undefined) {
        this._sourceEnvironment = value;
    };
    /**
     * Gets the status property value. The status property
     * @returns a browserSharedCookieStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: BrowserSharedCookieStatus | undefined) {
        this._status = value;
    };
}
