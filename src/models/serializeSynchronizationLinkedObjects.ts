import { serializeSynchronizationJobSubject } from './serializeSynchronizationJobSubject';
import { type SynchronizationJobSubject } from './synchronizationJobSubject';
import { type SynchronizationLinkedObjects } from './synchronizationLinkedObjects';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSynchronizationLinkedObjects(writer: SerializationWriter, synchronizationLinkedObjects: SynchronizationLinkedObjects | undefined = {} as SynchronizationLinkedObjects) : void {
        writer.writeObjectValue<SynchronizationJobSubject>("manager", synchronizationLinkedObjects.manager, serializeSynchronizationJobSubject);
        writer.writeCollectionOfObjectValues<SynchronizationJobSubject>("members", synchronizationLinkedObjects.members, serializeSynchronizationJobSubject);
        writer.writeStringValue("@odata.type", synchronizationLinkedObjects.odataType);
        writer.writeCollectionOfObjectValues<SynchronizationJobSubject>("owners", synchronizationLinkedObjects.owners, serializeSynchronizationJobSubject);
        writer.writeAdditionalData(synchronizationLinkedObjects.additionalData);
}
