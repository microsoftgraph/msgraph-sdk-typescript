import {BaseItem} from './baseItem';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createItemReferenceFromDiscriminatorValue} from './createItemReferenceFromDiscriminatorValue';
import {createUserFromDiscriminatorValue} from './createUserFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EntityImpl, IdentitySetImpl, ItemReferenceImpl, UserImpl} from './index';
import {ItemReference} from './itemReference';
import {User} from './user';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class BaseItemImpl extends EntityImpl implements BaseItem {
    /** Identity of the user, device, or application which created the item. Read-only. */
    private _createdBy?: IdentitySet | undefined;
    /** Identity of the user who created the item. Read-only. */
    private _createdByUser?: User | undefined;
    /** Date and time of item creation. Read-only. */
    private _createdDateTime?: Date | undefined;
    /** Provides a user-visible description of the item. Optional. */
    private _description?: string | undefined;
    /** ETag for the item. Read-only. */
    private _eTag?: string | undefined;
    /** Identity of the user, device, and application which last modified the item. Read-only. */
    private _lastModifiedBy?: IdentitySet | undefined;
    /** Identity of the user who last modified the item. Read-only. */
    private _lastModifiedByUser?: User | undefined;
    /** Date and time the item was last modified. Read-only. */
    private _lastModifiedDateTime?: Date | undefined;
    /** The name of the item. Read-write. */
    private _name?: string | undefined;
    /** Parent information, if the item has a parent. Read-write. */
    private _parentReference?: ItemReference | undefined;
    /** URL that displays the resource in the browser. Read-only. */
    private _webUrl?: string | undefined;
    /**
     * Instantiates a new baseItem and sets the default values.
     * @param baseItemParameterValue 
     */
    public constructor(baseItemParameterValue?: BaseItem | undefined) {
        super(baseItemParameterValue);
        this._createdBy = baseItemParameterValue?.createdBy;
        this._createdByUser = baseItemParameterValue?.createdByUser;
        this._createdDateTime = baseItemParameterValue?.createdDateTime;
        this._description = baseItemParameterValue?.description;
        this._eTag = baseItemParameterValue?.eTag;
        this._lastModifiedBy = baseItemParameterValue?.lastModifiedBy;
        this._lastModifiedByUser = baseItemParameterValue?.lastModifiedByUser;
        this._lastModifiedDateTime = baseItemParameterValue?.lastModifiedDateTime;
        this._name = baseItemParameterValue?.name;
        this._parentReference = baseItemParameterValue?.parentReference;
        this._webUrl = baseItemParameterValue?.webUrl;
    };
    /**
     * Gets the createdBy property value. Identity of the user, device, or application which created the item. Read-only.
     * @returns a IdentitySetInterface
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. Identity of the user, device, or application which created the item. Read-only.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        if(value) {
            this._createdBy = value instanceof IdentitySetImpl? value as IdentitySetImpl: new IdentitySetImpl(value);
        }
    };
    /**
     * Gets the createdByUser property value. Identity of the user who created the item. Read-only.
     * @returns a UserInterface
     */
    public get createdByUser() {
        return this._createdByUser;
    };
    /**
     * Sets the createdByUser property value. Identity of the user who created the item. Read-only.
     * @param value Value to set for the createdByUser property.
     */
    public set createdByUser(value: User | undefined) {
        if(value) {
            this._createdByUser = value instanceof UserImpl? value as UserImpl: new UserImpl(value);
        }
    };
    /**
     * Gets the createdDateTime property value. Date and time of item creation. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Date and time of item creation. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the description property value. Provides a user-visible description of the item. Optional.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Provides a user-visible description of the item. Optional.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * Gets the eTag property value. ETag for the item. Read-only.
     * @returns a string
     */
    public get eTag() {
        return this._eTag;
    };
    /**
     * Sets the eTag property value. ETag for the item. Read-only.
     * @param value Value to set for the eTag property.
     */
    public set eTag(value: string | undefined) {
        if(value) {
            this._eTag = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "createdByUser": n => { this.createdByUser = n.getObjectValue<UserImpl>(createUserFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "eTag": n => { this.eTag = n.getStringValue(); },
            "lastModifiedBy": n => { this.lastModifiedBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "lastModifiedByUser": n => { this.lastModifiedByUser = n.getObjectValue<UserImpl>(createUserFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "parentReference": n => { this.parentReference = n.getObjectValue<ItemReferenceImpl>(createItemReferenceFromDiscriminatorValue); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the lastModifiedBy property value. Identity of the user, device, and application which last modified the item. Read-only.
     * @returns a IdentitySetInterface
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Sets the lastModifiedBy property value. Identity of the user, device, and application which last modified the item. Read-only.
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: IdentitySet | undefined) {
        if(value) {
            this._lastModifiedBy = value instanceof IdentitySetImpl? value as IdentitySetImpl: new IdentitySetImpl(value);
        }
    };
    /**
     * Gets the lastModifiedByUser property value. Identity of the user who last modified the item. Read-only.
     * @returns a UserInterface
     */
    public get lastModifiedByUser() {
        return this._lastModifiedByUser;
    };
    /**
     * Sets the lastModifiedByUser property value. Identity of the user who last modified the item. Read-only.
     * @param value Value to set for the lastModifiedByUser property.
     */
    public set lastModifiedByUser(value: User | undefined) {
        if(value) {
            this._lastModifiedByUser = value instanceof UserImpl? value as UserImpl: new UserImpl(value);
        }
    };
    /**
     * Gets the lastModifiedDateTime property value. Date and time the item was last modified. Read-only.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. Date and time the item was last modified. Read-only.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        if(value) {
            this._lastModifiedDateTime = value;
        }
    };
    /**
     * Gets the name property value. The name of the item. Read-write.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name of the item. Read-write.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        if(value) {
            this._name = value;
        }
    };
    /**
     * Gets the parentReference property value. Parent information, if the item has a parent. Read-write.
     * @returns a ItemReferenceInterface
     */
    public get parentReference() {
        return this._parentReference;
    };
    /**
     * Sets the parentReference property value. Parent information, if the item has a parent. Read-write.
     * @param value Value to set for the parentReference property.
     */
    public set parentReference(value: ItemReference | undefined) {
        if(value) {
            this._parentReference = value instanceof ItemReferenceImpl? value as ItemReferenceImpl: new ItemReferenceImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.createdBy){
            writer.writeObjectValue<IdentitySetImpl>("createdBy", (this.createdBy instanceof IdentitySetImpl? this.createdBy as IdentitySetImpl: new IdentitySetImpl(this.createdBy)));
        }
        if(this.createdByUser){
            writer.writeObjectValue<UserImpl>("createdByUser", (this.createdByUser instanceof UserImpl? this.createdByUser as UserImpl: new UserImpl(this.createdByUser)));
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.eTag){
            writer.writeStringValue("eTag", this.eTag);
        }
        if(this.lastModifiedBy){
            writer.writeObjectValue<IdentitySetImpl>("lastModifiedBy", (this.lastModifiedBy instanceof IdentitySetImpl? this.lastModifiedBy as IdentitySetImpl: new IdentitySetImpl(this.lastModifiedBy)));
        }
        if(this.lastModifiedByUser){
            writer.writeObjectValue<UserImpl>("lastModifiedByUser", (this.lastModifiedByUser instanceof UserImpl? this.lastModifiedByUser as UserImpl: new UserImpl(this.lastModifiedByUser)));
        }
        if(this.lastModifiedDateTime){
            writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.name){
            writer.writeStringValue("name", this.name);
        }
        if(this.parentReference){
            writer.writeObjectValue<ItemReferenceImpl>("parentReference", (this.parentReference instanceof ItemReferenceImpl? this.parentReference as ItemReferenceImpl: new ItemReferenceImpl(this.parentReference)));
        }
        if(this.webUrl){
            writer.writeStringValue("webUrl", this.webUrl);
        }
    };
    /**
     * Gets the webUrl property value. URL that displays the resource in the browser. Read-only.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. URL that displays the resource in the browser. Read-only.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        if(value) {
            this._webUrl = value;
        }
    };
}
