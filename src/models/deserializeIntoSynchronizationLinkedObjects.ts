import {createSynchronizationJobSubjectFromDiscriminatorValue} from './createSynchronizationJobSubjectFromDiscriminatorValue';
import {serializeSynchronizationJobSubject} from './serializeSynchronizationJobSubject';
import type {SynchronizationJobSubject} from './synchronizationJobSubject';
import type {SynchronizationLinkedObjects} from './synchronizationLinkedObjects';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationLinkedObjects(synchronizationLinkedObjects: SynchronizationLinkedObjects | undefined = {} as SynchronizationLinkedObjects) : Record<string, (node: ParseNode) => void> {
    return {
        "manager": n => { synchronizationLinkedObjects.manager = n.getObjectValue<SynchronizationJobSubject>(createSynchronizationJobSubjectFromDiscriminatorValue); },
        "members": n => { synchronizationLinkedObjects.members = n.getCollectionOfObjectValues<SynchronizationJobSubject>(createSynchronizationJobSubjectFromDiscriminatorValue); },
        "@odata.type": n => { synchronizationLinkedObjects.odataType = n.getStringValue(); },
        "owners": n => { synchronizationLinkedObjects.owners = n.getCollectionOfObjectValues<SynchronizationJobSubject>(createSynchronizationJobSubjectFromDiscriminatorValue); },
    }
}
