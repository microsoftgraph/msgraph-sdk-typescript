import {CopyNotebookModel} from './copyNotebookModel';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createNotebookLinksFromDiscriminatorValue} from './createNotebookLinksFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {IdentitySetImpl, NotebookLinksImpl} from './index';
import {NotebookLinks} from './notebookLinks';
import {OnenoteUserRole} from './onenoteUserRole';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CopyNotebookModelImpl implements CopyNotebookModel {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new CopyNotebookModel and sets the default values.
     * @param copyNotebookModelParameterValue 
     */
    public constructor(copyNotebookModelParameterValue?: CopyNotebookModel | undefined) {
        this._additionalData = copyNotebookModelParameterValue?.additionalData ? copyNotebookModelParameterValue?.additionalData! : {};
        this._createdBy = copyNotebookModelParameterValue?.createdBy;
        this._createdByIdentity = copyNotebookModelParameterValue?.createdByIdentity;
        this._createdTime = copyNotebookModelParameterValue?.createdTime;
        this._id = copyNotebookModelParameterValue?.id;
        this._isDefault = copyNotebookModelParameterValue?.isDefault;
        this._isShared = copyNotebookModelParameterValue?.isShared;
        this._lastModifiedBy = copyNotebookModelParameterValue?.lastModifiedBy;
        this._lastModifiedByIdentity = copyNotebookModelParameterValue?.lastModifiedByIdentity;
        this._lastModifiedTime = copyNotebookModelParameterValue?.lastModifiedTime;
        this._links = copyNotebookModelParameterValue?.links;
        this._name = copyNotebookModelParameterValue?.name;
        this._sectionGroupsUrl = copyNotebookModelParameterValue?.sectionGroupsUrl;
        this._sectionsUrl = copyNotebookModelParameterValue?.sectionsUrl;
        this._self = copyNotebookModelParameterValue?.self;
        this._userRole = copyNotebookModelParameterValue?.userRole;
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
        if(value) {
            this._createdBy = value;
        }
    };
    /**
     * Gets the createdByIdentity property value. The createdByIdentity property
     * @returns a IdentitySetInterface
     */
    public get createdByIdentity() {
        return this._createdByIdentity;
    };
    /**
     * Sets the createdByIdentity property value. The createdByIdentity property
     * @param value Value to set for the createdByIdentity property.
     */
    public set createdByIdentity(value: IdentitySet | undefined) {
        if(value) {
            this._createdByIdentity = value instanceof IdentitySetImpl? value as IdentitySetImpl: new IdentitySetImpl(value);
        }
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
        if(value) {
            this._createdTime = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "createdBy": n => { this.createdBy = n.getStringValue(); },
            "createdByIdentity": n => { this.createdByIdentity = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "createdTime": n => { this.createdTime = n.getDateValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "isDefault": n => { this.isDefault = n.getBooleanValue(); },
            "isShared": n => { this.isShared = n.getBooleanValue(); },
            "lastModifiedBy": n => { this.lastModifiedBy = n.getStringValue(); },
            "lastModifiedByIdentity": n => { this.lastModifiedByIdentity = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "lastModifiedTime": n => { this.lastModifiedTime = n.getDateValue(); },
            "links": n => { this.links = n.getObjectValue<NotebookLinksImpl>(createNotebookLinksFromDiscriminatorValue); },
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
        if(value) {
            this._id = value;
        }
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
        if(value) {
            this._isDefault = value;
        }
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
        if(value) {
            this._isShared = value;
        }
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
        if(value) {
            this._lastModifiedBy = value;
        }
    };
    /**
     * Gets the lastModifiedByIdentity property value. The lastModifiedByIdentity property
     * @returns a IdentitySetInterface
     */
    public get lastModifiedByIdentity() {
        return this._lastModifiedByIdentity;
    };
    /**
     * Sets the lastModifiedByIdentity property value. The lastModifiedByIdentity property
     * @param value Value to set for the lastModifiedByIdentity property.
     */
    public set lastModifiedByIdentity(value: IdentitySet | undefined) {
        if(value) {
            this._lastModifiedByIdentity = value instanceof IdentitySetImpl? value as IdentitySetImpl: new IdentitySetImpl(value);
        }
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
        if(value) {
            this._lastModifiedTime = value;
        }
    };
    /**
     * Gets the links property value. The links property
     * @returns a NotebookLinksInterface
     */
    public get links() {
        return this._links;
    };
    /**
     * Sets the links property value. The links property
     * @param value Value to set for the links property.
     */
    public set links(value: NotebookLinks | undefined) {
        if(value) {
            this._links = value instanceof NotebookLinksImpl? value as NotebookLinksImpl: new NotebookLinksImpl(value);
        }
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
        if(value) {
            this._name = value;
        }
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
        if(value) {
            this._sectionGroupsUrl = value;
        }
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
        if(value) {
            this._sectionsUrl = value;
        }
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
        if(value) {
            this._self = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.createdBy){
            writer.writeStringValue("createdBy", this.createdBy);
        }
        if(this.createdByIdentity){
            writer.writeObjectValue<IdentitySetImpl>("createdByIdentity", (this.createdByIdentity instanceof IdentitySetImpl? this.createdByIdentity as IdentitySetImpl: new IdentitySetImpl(this.createdByIdentity)));
        }
        if(this.createdTime){
            writer.writeDateValue("createdTime", this.createdTime);
        }
        if(this.id){
            writer.writeStringValue("id", this.id);
        }
        if(this.isDefault){
            writer.writeBooleanValue("isDefault", this.isDefault);
        }
        if(this.isShared){
            writer.writeBooleanValue("isShared", this.isShared);
        }
        if(this.lastModifiedBy){
            writer.writeStringValue("lastModifiedBy", this.lastModifiedBy);
        }
        if(this.lastModifiedByIdentity){
            writer.writeObjectValue<IdentitySetImpl>("lastModifiedByIdentity", (this.lastModifiedByIdentity instanceof IdentitySetImpl? this.lastModifiedByIdentity as IdentitySetImpl: new IdentitySetImpl(this.lastModifiedByIdentity)));
        }
        if(this.lastModifiedTime){
            writer.writeDateValue("lastModifiedTime", this.lastModifiedTime);
        }
        if(this.links){
            writer.writeObjectValue<NotebookLinksImpl>("links", (this.links instanceof NotebookLinksImpl? this.links as NotebookLinksImpl: new NotebookLinksImpl(this.links)));
        }
        if(this.name){
            writer.writeStringValue("name", this.name);
        }
        if(this.sectionGroupsUrl){
            writer.writeStringValue("sectionGroupsUrl", this.sectionGroupsUrl);
        }
        if(this.sectionsUrl){
            writer.writeStringValue("sectionsUrl", this.sectionsUrl);
        }
        if(this.self){
            writer.writeStringValue("self", this.self);
        }
        if(this.userRole){
            writer.writeEnumValue<OnenoteUserRole>("userRole", this.userRole);
        }
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
        if(value) {
            this._userRole = value;
        }
    };
}
