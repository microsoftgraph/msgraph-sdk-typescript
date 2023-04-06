import {BrowserSiteCompatibilityMode} from './browserSiteCompatibilityMode';
import {BrowserSiteMergeType} from './browserSiteMergeType';
import {BrowserSiteStatus} from './browserSiteStatus';
import {BrowserSiteTargetEnvironment} from './browserSiteTargetEnvironment';
import {createBrowserSiteHistoryFromDiscriminatorValue} from './createBrowserSiteHistoryFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {BrowserSiteHistory, Entity, IdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Singleton entity which is used to specify IE mode site metadata
 */
export class BrowserSite extends Entity implements Parsable {
    /** Boolean attribute that controls the behavior of redirected sites */
    private _allowRedirect?: boolean | undefined;
    /** The comment for the site */
    private _comment?: string | undefined;
    /** The compatibilityMode property */
    private _compatibilityMode?: BrowserSiteCompatibilityMode | undefined;
    /** The datetime that the site is created */
    private _createdDateTime?: Date | undefined;
    /** The datetime that the admin deleted the site */
    private _deletedDateTime?: Date | undefined;
    /** The collection stores site revision metadata and audit logs. */
    private _history?: BrowserSiteHistory[] | undefined;
    /** The admin who made the last update on the site. */
    private _lastModifiedBy?: IdentitySet | undefined;
    /** The datetime that the admin updated the site. */
    private _lastModifiedDateTime?: Date | undefined;
    /** The mergeType property */
    private _mergeType?: BrowserSiteMergeType | undefined;
    /** The status property */
    private _status?: BrowserSiteStatus | undefined;
    /** The targetEnvironment property */
    private _targetEnvironment?: BrowserSiteTargetEnvironment | undefined;
    /** The URL of the site */
    private _webUrl?: string | undefined;
    /**
     * Gets the allowRedirect property value. Boolean attribute that controls the behavior of redirected sites
     * @returns a boolean
     */
    public get allowRedirect() {
        return this._allowRedirect;
    };
    /**
     * Sets the allowRedirect property value. Boolean attribute that controls the behavior of redirected sites
     * @param value Value to set for the allowRedirect property.
     */
    public set allowRedirect(value: boolean | undefined) {
        this._allowRedirect = value;
    };
    /**
     * Gets the comment property value. The comment for the site
     * @returns a string
     */
    public get comment() {
        return this._comment;
    };
    /**
     * Sets the comment property value. The comment for the site
     * @param value Value to set for the comment property.
     */
    public set comment(value: string | undefined) {
        this._comment = value;
    };
    /**
     * Gets the compatibilityMode property value. The compatibilityMode property
     * @returns a browserSiteCompatibilityMode
     */
    public get compatibilityMode() {
        return this._compatibilityMode;
    };
    /**
     * Sets the compatibilityMode property value. The compatibilityMode property
     * @param value Value to set for the compatibilityMode property.
     */
    public set compatibilityMode(value: BrowserSiteCompatibilityMode | undefined) {
        this._compatibilityMode = value;
    };
    /**
     * Instantiates a new browserSite and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The datetime that the site is created
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The datetime that the site is created
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the deletedDateTime property value. The datetime that the admin deleted the site
     * @returns a Date
     */
    public get deletedDateTime() {
        return this._deletedDateTime;
    };
    /**
     * Sets the deletedDateTime property value. The datetime that the admin deleted the site
     * @param value Value to set for the deletedDateTime property.
     */
    public set deletedDateTime(value: Date | undefined) {
        this._deletedDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowRedirect": n => { this.allowRedirect = n.getBooleanValue(); },
            "comment": n => { this.comment = n.getStringValue(); },
            "compatibilityMode": n => { this.compatibilityMode = n.getEnumValue<BrowserSiteCompatibilityMode>(BrowserSiteCompatibilityMode); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "deletedDateTime": n => { this.deletedDateTime = n.getDateValue(); },
            "history": n => { this.history = n.getCollectionOfObjectValues<BrowserSiteHistory>(createBrowserSiteHistoryFromDiscriminatorValue); },
            "lastModifiedBy": n => { this.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "mergeType": n => { this.mergeType = n.getEnumValue<BrowserSiteMergeType>(BrowserSiteMergeType); },
            "status": n => { this.status = n.getEnumValue<BrowserSiteStatus>(BrowserSiteStatus); },
            "targetEnvironment": n => { this.targetEnvironment = n.getEnumValue<BrowserSiteTargetEnvironment>(BrowserSiteTargetEnvironment); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the history property value. The collection stores site revision metadata and audit logs.
     * @returns a browserSiteHistory
     */
    public get history() {
        return this._history;
    };
    /**
     * Sets the history property value. The collection stores site revision metadata and audit logs.
     * @param value Value to set for the history property.
     */
    public set history(value: BrowserSiteHistory[] | undefined) {
        this._history = value;
    };
    /**
     * Gets the lastModifiedBy property value. The admin who made the last update on the site.
     * @returns a identitySet
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Sets the lastModifiedBy property value. The admin who made the last update on the site.
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: IdentitySet | undefined) {
        this._lastModifiedBy = value;
    };
    /**
     * Gets the lastModifiedDateTime property value. The datetime that the admin updated the site.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The datetime that the admin updated the site.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the mergeType property value. The mergeType property
     * @returns a browserSiteMergeType
     */
    public get mergeType() {
        return this._mergeType;
    };
    /**
     * Sets the mergeType property value. The mergeType property
     * @param value Value to set for the mergeType property.
     */
    public set mergeType(value: BrowserSiteMergeType | undefined) {
        this._mergeType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("allowRedirect", this.allowRedirect);
        writer.writeStringValue("comment", this.comment);
        writer.writeEnumValue<BrowserSiteCompatibilityMode>("compatibilityMode", this.compatibilityMode);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeDateValue("deletedDateTime", this.deletedDateTime);
        writer.writeCollectionOfObjectValues<BrowserSiteHistory>("history", this.history);
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", this.lastModifiedBy);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeEnumValue<BrowserSiteMergeType>("mergeType", this.mergeType);
        writer.writeEnumValue<BrowserSiteStatus>("status", this.status);
        writer.writeEnumValue<BrowserSiteTargetEnvironment>("targetEnvironment", this.targetEnvironment);
        writer.writeStringValue("webUrl", this.webUrl);
    };
    /**
     * Gets the status property value. The status property
     * @returns a browserSiteStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: BrowserSiteStatus | undefined) {
        this._status = value;
    };
    /**
     * Gets the targetEnvironment property value. The targetEnvironment property
     * @returns a browserSiteTargetEnvironment
     */
    public get targetEnvironment() {
        return this._targetEnvironment;
    };
    /**
     * Sets the targetEnvironment property value. The targetEnvironment property
     * @param value Value to set for the targetEnvironment property.
     */
    public set targetEnvironment(value: BrowserSiteTargetEnvironment | undefined) {
        this._targetEnvironment = value;
    };
    /**
     * Gets the webUrl property value. The URL of the site
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. The URL of the site
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
