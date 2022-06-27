import {Contact} from './contact';
import {ContactFolder} from './contactFolder';
import {createContactFolderFromDiscriminatorValue} from './createContactFolderFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createMultiValueLegacyExtendedPropertyFromDiscriminatorValue} from './createMultiValueLegacyExtendedPropertyFromDiscriminatorValue';
import {createSingleValueLegacyExtendedPropertyFromDiscriminatorValue} from './createSingleValueLegacyExtendedPropertyFromDiscriminatorValue';
import {ContactImpl, EntityImpl, MultiValueLegacyExtendedPropertyImpl, SingleValueLegacyExtendedPropertyImpl} from './index';
import {MultiValueLegacyExtendedProperty} from './multiValueLegacyExtendedProperty';
import {SingleValueLegacyExtendedProperty} from './singleValueLegacyExtendedProperty';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ContactFolderImpl extends EntityImpl implements ContactFolder {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
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
     * Instantiates a new ContactFolder and sets the default values.
     * @param contactFolderParameterValue 
     */
    public constructor(contactFolderParameterValue?: ContactFolder | undefined) {
        super(contactFolderParameterValue);
        this.additionalData = contactFolderParameterValue?.additionalData ? contactFolderParameterValue?.additionalData! : {};
        const childFoldersArrValue: ContactFolderImpl[] = []; contactFolderParameterValue.childFolders?.forEach(element => {childFoldersArrValue.push(element instanceof ContactFolderImpl? element : new ContactFolderImpl(element));});
        this.childFolders = childFoldersArrValue;
        const contactsArrValue: ContactImpl[] = []; contactFolderParameterValue.contacts?.forEach(element => {contactsArrValue.push(element instanceof ContactImpl? element : new ContactImpl(element));});
        this.contacts = contactsArrValue;
        this.displayName = contactFolderParameterValue?.displayName;
        const multiValueExtendedPropertiesArrValue: MultiValueLegacyExtendedPropertyImpl[] = []; contactFolderParameterValue.multiValueExtendedProperties?.forEach(element => {multiValueExtendedPropertiesArrValue.push(element instanceof MultiValueLegacyExtendedPropertyImpl? element : new MultiValueLegacyExtendedPropertyImpl(element));});
        this.multiValueExtendedProperties = multiValueExtendedPropertiesArrValue;
        this.parentFolderId = contactFolderParameterValue?.parentFolderId;
        const singleValueExtendedPropertiesArrValue: SingleValueLegacyExtendedPropertyImpl[] = []; contactFolderParameterValue.singleValueExtendedProperties?.forEach(element => {singleValueExtendedPropertiesArrValue.push(element instanceof SingleValueLegacyExtendedPropertyImpl? element : new SingleValueLegacyExtendedPropertyImpl(element));});
        this.singleValueExtendedProperties = singleValueExtendedPropertiesArrValue;
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
        if(this.childFolders && this.childFolders.length != 0){        const childFoldersArrValue: ContactFolderImpl[] = []; this.childFolders?.forEach(element => {childFoldersArrValue.push(element instanceof ContactFolderImpl? element : new ContactFolderImpl(element));});
            writer.writeCollectionOfObjectValues<ContactFolderImpl>("childFolders", childFoldersArrValue);
        }
        if(this.contacts && this.contacts.length != 0){        const contactsArrValue: ContactImpl[] = []; this.contacts?.forEach(element => {contactsArrValue.push(element instanceof ContactImpl? element : new ContactImpl(element));});
            writer.writeCollectionOfObjectValues<ContactImpl>("contacts", contactsArrValue);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.multiValueExtendedProperties && this.multiValueExtendedProperties.length != 0){        const multiValueExtendedPropertiesArrValue: MultiValueLegacyExtendedPropertyImpl[] = []; this.multiValueExtendedProperties?.forEach(element => {multiValueExtendedPropertiesArrValue.push(element instanceof MultiValueLegacyExtendedPropertyImpl? element : new MultiValueLegacyExtendedPropertyImpl(element));});
            writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedPropertyImpl>("multiValueExtendedProperties", multiValueExtendedPropertiesArrValue);
        }
        if(this.parentFolderId){
            writer.writeStringValue("parentFolderId", this.parentFolderId);
        }
        if(this.singleValueExtendedProperties && this.singleValueExtendedProperties.length != 0){        const singleValueExtendedPropertiesArrValue: SingleValueLegacyExtendedPropertyImpl[] = []; this.singleValueExtendedProperties?.forEach(element => {singleValueExtendedPropertiesArrValue.push(element instanceof SingleValueLegacyExtendedPropertyImpl? element : new SingleValueLegacyExtendedPropertyImpl(element));});
            writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedPropertyImpl>("singleValueExtendedProperties", singleValueExtendedPropertiesArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
