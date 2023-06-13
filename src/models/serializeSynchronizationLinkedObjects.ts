import {serializeSynchronizationJobSubject} from './serializeSynchronizationJobSubject';
import {SynchronizationJobSubject} from './synchronizationJobSubject';
import {SynchronizationLinkedObjects} from './synchronizationLinkedObjects';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSynchronizationLinkedObjects(writer: SerializationWriter, synchronizationLinkedObjects: SynchronizationLinkedObjects | undefined = {} as SynchronizationLinkedObjects) : void {
        writer.writeObjectValue<SynchronizationJobSubject>("manager", synchronizationLinkedObjects.manager, serializeSynchronizationJobSubject);
        writer.writeCollectionOfObjectValues<SynchronizationJobSubject>("members", synchronizationLinkedObjects.members, serializeSynchronizationJobSubject);
        writer.writeStringValue("@odata.type", synchronizationLinkedObjects.odataType);
        writer.writeCollectionOfObjectValues<SynchronizationJobSubject>("owners", synchronizationLinkedObjects.owners, serializeSynchronizationJobSubject);
        writer.writeAdditionalData(synchronizationLinkedObjects.additionalData);
}
