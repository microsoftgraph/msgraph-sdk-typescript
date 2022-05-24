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

/** Casts the previous resource to user. */
export class ContactFolderImpl extends EntityImpl implements ContactFolder, Parsable {
    /** The collection of child folders in the folder. Navigation property. Read-only. Nullable. */
    public childFolders?: ContactFolder[] | undefined;
    /** The contacts in the folder. Navigation property. Read-only. Nullable. */
    public contacts?: Contact[] | undefined;
    /** The folder's display name. */
    public displayName?: string | undefined;
    /** The collection of multi-value extended properties defined for the contactFolder. Read-only. Nullable. */
    public multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[] | undefined;
    /** The ID of the folder's parent folder. */
    public parentFolderId?: string | undefined;
    /** The collection of single-value extended properties defined for the contactFolder. Read-only. Nullable. */
    public singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[] | undefined;
    /**
     * Instantiates a new contactFolder and sets the default values.
     * @param contactFolderParameterValue 
     */
    public constructor(contactFolderParameterValue?: ContactFolder | undefined) {
        super();
        this.childFolders = contactFolderParameterValue?.childFolders ;
        this.contacts = contactFolderParameterValue?.contacts ;
        this.displayName = contactFolderParameterValue?.displayName ;
        this.multiValueExtendedProperties = contactFolderParameterValue?.multiValueExtendedProperties ;
        this.parentFolderId = contactFolderParameterValue?.parentFolderId ;
        this.singleValueExtendedProperties = contactFolderParameterValue?.singleValueExtendedProperties ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.childFolders && this.childFolders.length != 0){        const childFoldersArrValue: ContactFolderImpl[] = []; this.childFolders?.forEach(element => {childFoldersArrValue.push(new ContactFolderImpl(element));});
        writer.writeCollectionOfObjectValues<ContactFolderImpl>("childFolders", childFoldersArrValue);
        }
        if(this.contacts && this.contacts.length != 0){        const contactsArrValue: ContactImpl[] = []; this.contacts?.forEach(element => {contactsArrValue.push(new ContactImpl(element));});
        writer.writeCollectionOfObjectValues<ContactImpl>("contacts", contactsArrValue);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.multiValueExtendedProperties && this.multiValueExtendedProperties.length != 0){        const multiValueExtendedPropertiesArrValue: MultiValueLegacyExtendedPropertyImpl[] = []; this.multiValueExtendedProperties?.forEach(element => {multiValueExtendedPropertiesArrValue.push(new MultiValueLegacyExtendedPropertyImpl(element));});
        writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedPropertyImpl>("multiValueExtendedProperties", multiValueExtendedPropertiesArrValue);
        }
        if(this.parentFolderId){
        writer.writeStringValue("parentFolderId", this.parentFolderId);
        }
        if(this.singleValueExtendedProperties && this.singleValueExtendedProperties.length != 0){        const singleValueExtendedPropertiesArrValue: SingleValueLegacyExtendedPropertyImpl[] = []; this.singleValueExtendedProperties?.forEach(element => {singleValueExtendedPropertiesArrValue.push(new SingleValueLegacyExtendedPropertyImpl(element));});
        writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedPropertyImpl>("singleValueExtendedProperties", singleValueExtendedPropertiesArrValue);
        }
    };
}
