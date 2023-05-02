import {Contact} from './contact';
import {ContactFolder} from './contactFolder';
import {MultiValueLegacyExtendedProperty} from './multiValueLegacyExtendedProperty';
import {serializeContact} from './serializeContact';
import {serializeEntity} from './serializeEntity';
import {serializeMultiValueLegacyExtendedProperty} from './serializeMultiValueLegacyExtendedProperty';
import {serializeSingleValueLegacyExtendedProperty} from './serializeSingleValueLegacyExtendedProperty';
import {SingleValueLegacyExtendedProperty} from './singleValueLegacyExtendedProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContactFolder(writer: SerializationWriter, contactFolder: ContactFolder | undefined = {} as ContactFolder) : void {
        serializeEntity(writer, contactFolder)
        writer.writeCollectionOfObjectValues<ContactFolder>("childFolders", contactFolder.childFolders, serializeContactFolder);
        writer.writeCollectionOfObjectValues<Contact>("contacts", contactFolder.contacts, serializeContact);
        writer.writeStringValue("displayName", contactFolder.displayName);
        writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedProperty>("multiValueExtendedProperties", contactFolder.multiValueExtendedProperties, serializeMultiValueLegacyExtendedProperty);
        writer.writeStringValue("parentFolderId", contactFolder.parentFolderId);
        writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedProperty>("singleValueExtendedProperties", contactFolder.singleValueExtendedProperties, serializeSingleValueLegacyExtendedProperty);
}
