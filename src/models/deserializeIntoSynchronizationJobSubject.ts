import {createSynchronizationLinkedObjectsFromDiscriminatorValue} from './createSynchronizationLinkedObjectsFromDiscriminatorValue';
import {serializeSynchronizationLinkedObjects} from './serializeSynchronizationLinkedObjects';
import {SynchronizationJobSubject} from './synchronizationJobSubject';
import {SynchronizationLinkedObjects} from './synchronizationLinkedObjects';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationJobSubject(synchronizationJobSubject: SynchronizationJobSubject | undefined = {} as SynchronizationJobSubject) : Record<string, (node: ParseNode) => void> {
    return {
        "links": n => { synchronizationJobSubject.links = n.getObjectValue<SynchronizationLinkedObjects>(createSynchronizationLinkedObjectsFromDiscriminatorValue); },
        "objectId": n => { synchronizationJobSubject.objectId = n.getStringValue(); },
        "objectTypeName": n => { synchronizationJobSubject.objectTypeName = n.getStringValue(); },
        "@odata.type": n => { synchronizationJobSubject.odataType = n.getStringValue(); },
    }
}
