import {DeviceInstallState} from './deviceInstallState';
import {EBookInstallSummary} from './eBookInstallSummary';
import {ManagedEBook} from './managedEBook';
import {ManagedEBookAssignment} from './managedEBookAssignment';
import {MimeContent} from './mimeContent';
import {serializeDeviceInstallState} from './serializeDeviceInstallState';
import {serializeEBookInstallSummary} from './serializeEBookInstallSummary';
import {serializeEntity} from './serializeEntity';
import {serializeManagedEBookAssignment} from './serializeManagedEBookAssignment';
import {serializeMimeContent} from './serializeMimeContent';
import {serializeUserInstallStateSummary} from './serializeUserInstallStateSummary';
import {UserInstallStateSummary} from './userInstallStateSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
