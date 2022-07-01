import {Contact} from './contact';
import {ContactFolder} from './contactFolder';
import {createContactFolderFromDiscriminatorValue} from './createContactFolderFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createMultiValueLegacyExtendedPropertyFromDiscriminatorValue} from './createMultiValueLegacyExtendedPropertyFromDiscriminatorValue';
import {createSingleValueLegacyExtendedPropertyFromDiscriminatorValue} from './createSingleValueLegacyExtendedPropertyFromDiscriminatorValue';
import {ContactImpl, EntityImpl, MultiValueLegacyExtendedPropertyImpl, SingleValueLegacyExtendedPropertyImpl} from './index';
import {MultiValueLegacyExtendedProperty} from './multiValueLegacyExtendedProperty';
import {SingleValueLegacyExtendedProperty} from './singleValueLegacyExtendedProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class ContactFolderImpl extends EntityImpl implements ContactFolder {
    /** The collection of child folders in the folder. Navigation property. Read-only. Nullable. */
    private _childFolders?: ContactFolder[] | undefined;
    /** The contacts in the folder. Navigation property. Read-only. Nullable. */
    private _contacts?: Contact[] | undefined;
    /** The folder's display name. */
    private _displayName?: string | undefined;
    /** The collection of multi-value extended properties defined for the contactFolder. Read-only. Nullable. */
    private _multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[] | undefined;
    /** The ID of the folder's parent folder. */
    private _parentFolderId?: string | undefined;
    /** The collection of single-value extended properties defined for the contactFolder. Read-only. Nullable. */
    private _singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[] | undefined;
    /**
     * Gets the childFolders property value. The collection of child folders in the folder. Navigation property. Read-only. Nullable.
     * @returns a ContactFolderInterface
     */
    public get childFolders() {
        return this._childFolders;
    };
    /**
     * Sets the childFolders property value. The collection of child folders in the folder. Navigation property. Read-only. Nullable.
     * @param value Value to set for the childFolders property.
     */
    public set childFolders(value: ContactFolder[] | undefined) {
        if(value) {
            const childFoldersArrValue: ContactFolderImpl[] = [];
            this.childFolders?.forEach(element => {
                childFoldersArrValue.push((element instanceof ContactFolderImpl? element as ContactFolderImpl:new ContactFolderImpl(element)));
            });
            this._childFolders = childFoldersArrValue;
        }
    };
    /**
     * Instantiates a new contactFolder and sets the default values.
     * @param contactFolderParameterValue 
     */
    public constructor(contactFolderParameterValue?: ContactFolder | undefined) {
        super(contactFolderParameterValue);
        this._childFolders = contactFolderParameterValue?.childFolders;
        this._contacts = contactFolderParameterValue?.contacts;
        this._displayName = contactFolderParameterValue?.displayName;
        this._multiValueExtendedProperties = contactFolderParameterValue?.multiValueExtendedProperties;
        this._parentFolderId = contactFolderParameterValue?.parentFolderId;
        this._singleValueExtendedProperties = contactFolderParameterValue?.singleValueExtendedProperties;
    };
    /**
     * Gets the contacts property value. The contacts in the folder. Navigation property. Read-only. Nullable.
     * @returns a ContactInterface
     */
    public get contacts() {
        return this._contacts;
    };
    /**
     * Sets the contacts property value. The contacts in the folder. Navigation property. Read-only. Nullable.
     * @param value Value to set for the contacts property.
     */
    public set contacts(value: Contact[] | undefined) {
        if(value) {
            const contactsArrValue: ContactImpl[] = [];
            this.contacts?.forEach(element => {
                contactsArrValue.push((element instanceof ContactImpl? element as ContactImpl:new ContactImpl(element)));
            });
            this._contacts = contactsArrValue;
        }
    };
    /**
     * Gets the displayName property value. The folder's display name.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The folder's display name.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "childFolders": n => { this.childFolders = n.getCollectionOfObjectValues<ContactFolderImpl>(createContactFolderFromDiscriminatorValue); },
            "contacts": n => { this.contacts = n.getCollectionOfObjectValues<ContactImpl>(createContactFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "multiValueExtendedProperties": n => { this.multiValueExtendedProperties = n.getCollectionOfObjectValues<MultiValueLegacyExtendedPropertyImpl>(createMultiValueLegacyExtendedPropertyFromDiscriminatorValue); },
            "parentFolderId": n => { this.parentFolderId = n.getStringValue(); },
            "singleValueExtendedProperties": n => { this.singleValueExtendedProperties = n.getCollectionOfObjectValues<SingleValueLegacyExtendedPropertyImpl>(createSingleValueLegacyExtendedPropertyFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the contactFolder. Read-only. Nullable.
     * @returns a MultiValueLegacyExtendedPropertyInterface
     */
    public get multiValueExtendedProperties() {
        return this._multiValueExtendedProperties;
    };
    /**
     * Sets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the contactFolder. Read-only. Nullable.
     * @param value Value to set for the multiValueExtendedProperties property.
     */
    public set multiValueExtendedProperties(value: MultiValueLegacyExtendedProperty[] | undefined) {
        if(value) {
            const multiValueExtendedPropertiesArrValue: MultiValueLegacyExtendedPropertyImpl[] = [];
            this.multiValueExtendedProperties?.forEach(element => {
                multiValueExtendedPropertiesArrValue.push((element instanceof MultiValueLegacyExtendedPropertyImpl? element as MultiValueLegacyExtendedPropertyImpl:new MultiValueLegacyExtendedPropertyImpl(element)));
            });
            this._multiValueExtendedProperties = multiValueExtendedPropertiesArrValue;
        }
    };
    /**
     * Gets the parentFolderId property value. The ID of the folder's parent folder.
     * @returns a string
     */
    public get parentFolderId() {
        return this._parentFolderId;
    };
    /**
     * Sets the parentFolderId property value. The ID of the folder's parent folder.
     * @param value Value to set for the parentFolderId property.
     */
    public set parentFolderId(value: string | undefined) {
        if(value) {
            this._parentFolderId = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.childFolders && this.childFolders.length != 0){        const childFoldersArrValue: ContactFolderImpl[] = [];
        this.childFolders?.forEach(element => {
            childFoldersArrValue.push((element instanceof ContactFolderImpl? element as ContactFolderImpl:new ContactFolderImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ContactFolderImpl>("childFolders", childFoldersArrValue);
        }
        if(this.contacts && this.contacts.length != 0){        const contactsArrValue: ContactImpl[] = [];
        this.contacts?.forEach(element => {
            contactsArrValue.push((element instanceof ContactImpl? element as ContactImpl:new ContactImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ContactImpl>("contacts", contactsArrValue);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.multiValueExtendedProperties && this.multiValueExtendedProperties.length != 0){        const multiValueExtendedPropertiesArrValue: MultiValueLegacyExtendedPropertyImpl[] = [];
        this.multiValueExtendedProperties?.forEach(element => {
            multiValueExtendedPropertiesArrValue.push((element instanceof MultiValueLegacyExtendedPropertyImpl? element as MultiValueLegacyExtendedPropertyImpl:new MultiValueLegacyExtendedPropertyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedPropertyImpl>("multiValueExtendedProperties", multiValueExtendedPropertiesArrValue);
        }
        if(this.parentFolderId){
            writer.writeStringValue("parentFolderId", this.parentFolderId);
        }
        if(this.singleValueExtendedProperties && this.singleValueExtendedProperties.length != 0){        const singleValueExtendedPropertiesArrValue: SingleValueLegacyExtendedPropertyImpl[] = [];
        this.singleValueExtendedProperties?.forEach(element => {
            singleValueExtendedPropertiesArrValue.push((element instanceof SingleValueLegacyExtendedPropertyImpl? element as SingleValueLegacyExtendedPropertyImpl:new SingleValueLegacyExtendedPropertyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedPropertyImpl>("singleValueExtendedProperties", singleValueExtendedPropertiesArrValue);
        }
    };
    /**
     * Gets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the contactFolder. Read-only. Nullable.
     * @returns a SingleValueLegacyExtendedPropertyInterface
     */
    public get singleValueExtendedProperties() {
        return this._singleValueExtendedProperties;
    };
    /**
     * Sets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the contactFolder. Read-only. Nullable.
     * @param value Value to set for the singleValueExtendedProperties property.
     */
    public set singleValueExtendedProperties(value: SingleValueLegacyExtendedProperty[] | undefined) {
        if(value) {
            const singleValueExtendedPropertiesArrValue: SingleValueLegacyExtendedPropertyImpl[] = [];
            this.singleValueExtendedProperties?.forEach(element => {
                singleValueExtendedPropertiesArrValue.push((element instanceof SingleValueLegacyExtendedPropertyImpl? element as SingleValueLegacyExtendedPropertyImpl:new SingleValueLegacyExtendedPropertyImpl(element)));
            });
            this._singleValueExtendedProperties = singleValueExtendedPropertiesArrValue;
        }
    };
}
