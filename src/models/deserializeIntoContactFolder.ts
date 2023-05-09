import {Contact} from './contact';
import {ContactFolder} from './contactFolder';
import {createContactFolderFromDiscriminatorValue} from './createContactFolderFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createMultiValueLegacyExtendedPropertyFromDiscriminatorValue} from './createMultiValueLegacyExtendedPropertyFromDiscriminatorValue';
import {createSingleValueLegacyExtendedPropertyFromDiscriminatorValue} from './createSingleValueLegacyExtendedPropertyFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {MultiValueLegacyExtendedProperty} from './multiValueLegacyExtendedProperty';
import {serializeContact} from './serializeContact';
import {serializeContactFolder} from './serializeContactFolder';
import {serializeMultiValueLegacyExtendedProperty} from './serializeMultiValueLegacyExtendedProperty';
import {serializeSingleValueLegacyExtendedProperty} from './serializeSingleValueLegacyExtendedProperty';
import {SingleValueLegacyExtendedProperty} from './singleValueLegacyExtendedProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContactFolder(contactFolder: ContactFolder | undefined = {} as ContactFolder) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(contactFolder),
        "childFolders": n => { contactFolder.childFolders = n.getCollectionOfObjectValues<ContactFolder>(createContactFolderFromDiscriminatorValue); },
        "contacts": n => { contactFolder.contacts = n.getCollectionOfObjectValues<Contact>(createContactFromDiscriminatorValue); },
        "displayName": n => { contactFolder.displayName = n.getStringValue(); },
        "multiValueExtendedProperties": n => { contactFolder.multiValueExtendedProperties = n.getCollectionOfObjectValues<MultiValueLegacyExtendedProperty>(createMultiValueLegacyExtendedPropertyFromDiscriminatorValue); },
        "parentFolderId": n => { contactFolder.parentFolderId = n.getStringValue(); },
        "singleValueExtendedProperties": n => { contactFolder.singleValueExtendedProperties = n.getCollectionOfObjectValues<SingleValueLegacyExtendedProperty>(createSingleValueLegacyExtendedPropertyFromDiscriminatorValue); },
    }
}
