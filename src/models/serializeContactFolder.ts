import { type Contact } from './contact';
import { type ContactFolder } from './contactFolder';
import { type MultiValueLegacyExtendedProperty } from './multiValueLegacyExtendedProperty';
import { serializeContact } from './serializeContact';
import { serializeEntity } from './serializeEntity';
import { serializeMultiValueLegacyExtendedProperty } from './serializeMultiValueLegacyExtendedProperty';
import { serializeSingleValueLegacyExtendedProperty } from './serializeSingleValueLegacyExtendedProperty';
import { type SingleValueLegacyExtendedProperty } from './singleValueLegacyExtendedProperty';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeContactFolder(writer: SerializationWriter, contactFolder: ContactFolder | undefined = {} as ContactFolder) : void {
        serializeEntity(writer, contactFolder)
        writer.writeCollectionOfObjectValues<ContactFolder>("childFolders", contactFolder.childFolders, serializeContactFolder);
        writer.writeCollectionOfObjectValues<Contact>("contacts", contactFolder.contacts, serializeContact);
        writer.writeStringValue("displayName", contactFolder.displayName);
        writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedProperty>("multiValueExtendedProperties", contactFolder.multiValueExtendedProperties, serializeMultiValueLegacyExtendedProperty);
        writer.writeStringValue("parentFolderId", contactFolder.parentFolderId);
        writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedProperty>("singleValueExtendedProperties", contactFolder.singleValueExtendedProperties, serializeSingleValueLegacyExtendedProperty);
}
