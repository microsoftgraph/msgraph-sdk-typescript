import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createNotebookLinksFromDiscriminatorValue} from './createNotebookLinksFromDiscriminatorValue';
import {IdentitySet, NotebookLinks} from './index';
import {OnenoteUserRole} from './onenoteUserRole';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CopyNotebookModel implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The createdBy property */
    private _createdBy?: string | undefined;
    /** The createdByIdentity property */
    private _createdByIdentity?: IdentitySet | undefined;
    /** The createdTime property */
    private _createdTime?: Date | undefined;
    /** The id property */
    private _id?: string | undefined;
    /** The isDefault property */
    private _isDefault?: boolean | undefined;
    /** The isShared property */
    private _isShared?: boolean | undefined;
    /** The lastModifiedBy property */
    private _lastModifiedBy?: string | undefined;
    /** The lastModifiedByIdentity property */
    private _lastModifiedByIdentity?: IdentitySet | undefined;
    /** The lastModifiedTime property */
    private _lastModifiedTime?: Date | undefined;
    /** The links property */
    private _links?: NotebookLinks | undefined;
    /** The name property */
    private _name?: string | undefined;
    /** The sectionGroupsUrl property */
    private _sectionGroupsUrl?: string | undefined;
    /** The sectionsUrl property */
    private _sectionsUrl?: string | undefined;
    /** The self property */
    private _self?: string | undefined;
    /** The userRole property */
    private _userRole?: OnenoteUserRole | undefined;
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
     * Instantiates a new CopyNotebookModel and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the createdBy property value. The createdBy property
     * @returns a string
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. The createdBy property
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: string | undefined) {
        this._createdBy = value;
    };
    /**
     * Gets the createdByIdentity property value. The createdByIdentity property
     * @returns a identitySet
     */
    public get createdByIdentity() {
        return this._createdByIdentity;
    };
    /**
     * Sets the createdByIdentity property value. The createdByIdentity property
     * @param value Value to set for the createdByIdentity property.
     */
    public set createdByIdentity(value: IdentitySet | undefined) {
        this._createdByIdentity = value;
    };
    /**
     * Gets the createdTime property value. The createdTime property
     * @returns a Date
     */
    public get createdTime() {
        return this._createdTime;
    };
    /**
     * Sets the createdTime property value. The createdTime property
     * @param value Value to set for the createdTime property.
     */
    public set createdTime(value: Date | undefined) {
        this._createdTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "createdBy": n => { this.createdBy = n.getStringValue(); },
            "createdByIdentity": n => { this.createdByIdentity = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "createdTime": n => { this.createdTime = n.getDateValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "isDefault": n => { this.isDefault = n.getBooleanValue(); },
            "isShared": n => { this.isShared = n.getBooleanValue(); },
            "lastModifiedBy": n => { this.lastModifiedBy = n.getStringValue(); },
            "lastModifiedByIdentity": n => { this.lastModifiedByIdentity = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "lastModifiedTime": n => { this.lastModifiedTime = n.getDateValue(); },
            "links": n => { this.links = n.getObjectValue<NotebookLinks>(createNotebookLinksFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "sectionGroupsUrl": n => { this.sectionGroupsUrl = n.getStringValue(); },
            "sectionsUrl": n => { this.sectionsUrl = n.getStringValue(); },
            "self": n => { this.self = n.getStringValue(); },
            "userRole": n => { this.userRole = n.getEnumValue<OnenoteUserRole>(OnenoteUserRole); },
        };
    };
    /**
     * Gets the id property value. The id property
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. The id property
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the isDefault property value. The isDefault property
     * @returns a boolean
     */
    public get isDefault() {
        return this._isDefault;
    };
    /**
     * Sets the isDefault property value. The isDefault property
     * @param value Value to set for the isDefault property.
     */
    public set isDefault(value: boolean | undefined) {
        this._isDefault = value;
    };
    /**
     * Gets the isShared property value. The isShared property
     * @returns a boolean
     */
    public get isShared() {
        return this._isShared;
    };
    /**
     * Sets the isShared property value. The isShared property
     * @param value Value to set for the isShared property.
     */
    public set isShared(value: boolean | undefined) {
        this._isShared = value;
    };
    /**
     * Gets the lastModifiedBy property value. The lastModifiedBy property
     * @returns a string
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Sets the lastModifiedBy property value. The lastModifiedBy property
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: string | undefined) {
        this._lastModifiedBy = value;
    };
    /**
     * Gets the lastModifiedByIdentity property value. The lastModifiedByIdentity property
     * @returns a identitySet
     */
    public get lastModifiedByIdentity() {
        return this._lastModifiedByIdentity;
    };
    /**
     * Sets the lastModifiedByIdentity property value. The lastModifiedByIdentity property
     * @param value Value to set for the lastModifiedByIdentity property.
     */
    public set lastModifiedByIdentity(value: IdentitySet | undefined) {
        this._lastModifiedByIdentity = value;
    };
    /**
     * Gets the lastModifiedTime property value. The lastModifiedTime property
     * @returns a Date
     */
    public get lastModifiedTime() {
        return this._lastModifiedTime;
    };
    /**
     * Sets the lastModifiedTime property value. The lastModifiedTime property
     * @param value Value to set for the lastModifiedTime property.
     */
    public set lastModifiedTime(value: Date | undefined) {
        this._lastModifiedTime = value;
    };
    /**
     * Gets the links property value. The links property
     * @returns a notebookLinks
     */
    public get links() {
        return this._links;
    };
    /**
     * Sets the links property value. The links property
     * @param value Value to set for the links property.
     */
    public set links(value: NotebookLinks | undefined) {
        this._links = value;
    };
    /**
     * Gets the name property value. The name property
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name property
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the sectionGroupsUrl property value. The sectionGroupsUrl property
     * @returns a string
     */
    public get sectionGroupsUrl() {
        return this._sectionGroupsUrl;
    };
    /**
     * Sets the sectionGroupsUrl property value. The sectionGroupsUrl property
     * @param value Value to set for the sectionGroupsUrl property.
     */
    public set sectionGroupsUrl(value: string | undefined) {
        this._sectionGroupsUrl = value;
    };
    /**
     * Gets the sectionsUrl property value. The sectionsUrl property
     * @returns a string
     */
    public get sectionsUrl() {
        return this._sectionsUrl;
    };
    /**
     * Sets the sectionsUrl property value. The sectionsUrl property
     * @param value Value to set for the sectionsUrl property.
     */
    public set sectionsUrl(value: string | undefined) {
        this._sectionsUrl = value;
    };
    /**
     * Gets the self property value. The self property
     * @returns a string
     */
    public get self() {
        return this._self;
    };
    /**
     * Sets the self property value. The self property
     * @param value Value to set for the self property.
     */
    public set self(value: string | undefined) {
        this._self = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("createdBy", this.createdBy);
        writer.writeObjectValue<IdentitySet>("createdByIdentity", this.createdByIdentity);
        writer.writeDateValue("createdTime", this.createdTime);
        writer.writeStringValue("id", this.id);
        writer.writeBooleanValue("isDefault", this.isDefault);
        writer.writeBooleanValue("isShared", this.isShared);
        writer.writeStringValue("lastModifiedBy", this.lastModifiedBy);
        writer.writeObjectValue<IdentitySet>("lastModifiedByIdentity", this.lastModifiedByIdentity);
        writer.writeDateValue("lastModifiedTime", this.lastModifiedTime);
        writer.writeObjectValue<NotebookLinks>("links", this.links);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("sectionGroupsUrl", this.sectionGroupsUrl);
        writer.writeStringValue("sectionsUrl", this.sectionsUrl);
        writer.writeStringValue("self", this.self);
        writer.writeEnumValue<OnenoteUserRole>("userRole", this.userRole);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the userRole property value. The userRole property
     * @returns a onenoteUserRole
     */
    public get userRole() {
        return this._userRole;
    };
    /**
     * Sets the userRole property value. The userRole property
     * @param value Value to set for the userRole property.
     */
    public set userRole(value: OnenoteUserRole | undefined) {
        this._userRole = value;
    };
}
