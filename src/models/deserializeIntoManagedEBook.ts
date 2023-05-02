import {createDeviceInstallStateFromDiscriminatorValue} from './createDeviceInstallStateFromDiscriminatorValue';
import {createEBookInstallSummaryFromDiscriminatorValue} from './createEBookInstallSummaryFromDiscriminatorValue';
import {createManagedEBookAssignmentFromDiscriminatorValue} from './createManagedEBookAssignmentFromDiscriminatorValue';
import {createMimeContentFromDiscriminatorValue} from './createMimeContentFromDiscriminatorValue';
import {createUserInstallStateSummaryFromDiscriminatorValue} from './createUserInstallStateSummaryFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceInstallState} from './deviceInstallState';
import {EBookInstallSummary} from './eBookInstallSummary';
import {ManagedEBook} from './managedEBook';
import {ManagedEBookAssignment} from './managedEBookAssignment';
import {MimeContent} from './mimeContent';
import {serializeDeviceInstallState} from './serializeDeviceInstallState';
import {serializeEBookInstallSummary} from './serializeEBookInstallSummary';
import {serializeManagedEBookAssignment} from './serializeManagedEBookAssignment';
import {serializeMimeContent} from './serializeMimeContent';
import {serializeUserInstallStateSummary} from './serializeUserInstallStateSummary';
import {UserInstallStateSummary} from './userInstallStateSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedEBook(managedEBook: ManagedEBook | undefined = {} as ManagedEBook) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedEBook),
        "assignments": n => { managedEBook.assignments = n.getCollectionOfObjectValues<ManagedEBookAssignment>(createManagedEBookAssignmentFromDiscriminatorValue); },
        "createdDateTime": n => { managedEBook.createdDateTime = n.getDateValue(); },
        "description": n => { managedEBook.description = n.getStringValue(); },
        "deviceStates": n => { managedEBook.deviceStates = n.getCollectionOfObjectValues<DeviceInstallState>(createDeviceInstallStateFromDiscriminatorValue); },
        "displayName": n => { managedEBook.displayName = n.getStringValue(); },
        "informationUrl": n => { managedEBook.informationUrl = n.getStringValue(); },
        "installSummary": n => { managedEBook.installSummary = n.getObjectValue<EBookInstallSummary>(createEBookInstallSummaryFromDiscriminatorValue); },
        "largeCover": n => { managedEBook.largeCover = n.getObjectValue<MimeContent>(createMimeContentFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { managedEBook.lastModifiedDateTime = n.getDateValue(); },
        "privacyInformationUrl": n => { managedEBook.privacyInformationUrl = n.getStringValue(); },
        "publishedDateTime": n => { managedEBook.publishedDateTime = n.getDateValue(); },
        "publisher": n => { managedEBook.publisher = n.getStringValue(); },
        "userStateSummary": n => { managedEBook.userStateSummary = n.getCollectionOfObjectValues<UserInstallStateSummary>(createUserInstallStateSummaryFromDiscriminatorValue); },
    }
}
