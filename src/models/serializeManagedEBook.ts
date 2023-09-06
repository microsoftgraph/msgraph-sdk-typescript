import { type DeviceInstallState } from './deviceInstallState';
import { type EBookInstallSummary } from './eBookInstallSummary';
import { type ManagedEBook } from './managedEBook';
import { type ManagedEBookAssignment } from './managedEBookAssignment';
import { type MimeContent } from './mimeContent';
import { serializeDeviceInstallState } from './serializeDeviceInstallState';
import { serializeEBookInstallSummary } from './serializeEBookInstallSummary';
import { serializeEntity } from './serializeEntity';
import { serializeManagedEBookAssignment } from './serializeManagedEBookAssignment';
import { serializeMimeContent } from './serializeMimeContent';
import { serializeUserInstallStateSummary } from './serializeUserInstallStateSummary';
import { type UserInstallStateSummary } from './userInstallStateSummary';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeManagedEBook(writer: SerializationWriter, managedEBook: ManagedEBook | undefined = {} as ManagedEBook) : void {
        serializeEntity(writer, managedEBook)
        writer.writeCollectionOfObjectValues<ManagedEBookAssignment>("assignments", managedEBook.assignments, serializeManagedEBookAssignment);
        writer.writeDateValue("createdDateTime", managedEBook.createdDateTime);
        writer.writeStringValue("description", managedEBook.description);
        writer.writeCollectionOfObjectValues<DeviceInstallState>("deviceStates", managedEBook.deviceStates, serializeDeviceInstallState);
        writer.writeStringValue("displayName", managedEBook.displayName);
        writer.writeStringValue("informationUrl", managedEBook.informationUrl);
        writer.writeObjectValue<EBookInstallSummary>("installSummary", managedEBook.installSummary, serializeEBookInstallSummary);
        writer.writeObjectValue<MimeContent>("largeCover", managedEBook.largeCover, serializeMimeContent);
        writer.writeDateValue("lastModifiedDateTime", managedEBook.lastModifiedDateTime);
        writer.writeStringValue("privacyInformationUrl", managedEBook.privacyInformationUrl);
        writer.writeDateValue("publishedDateTime", managedEBook.publishedDateTime);
        writer.writeStringValue("publisher", managedEBook.publisher);
        writer.writeCollectionOfObjectValues<UserInstallStateSummary>("userStateSummary", managedEBook.userStateSummary, serializeUserInstallStateSummary);
}
