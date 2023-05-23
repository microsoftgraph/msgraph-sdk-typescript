import {serializeSynchronizationLinkedObjects} from './serializeSynchronizationLinkedObjects';
import {SynchronizationJobSubject} from './synchronizationJobSubject';
import {SynchronizationLinkedObjects} from './synchronizationLinkedObjects';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSynchronizationJobSubject(writer: SerializationWriter, synchronizationJobSubject: SynchronizationJobSubject | undefined = {} as SynchronizationJobSubject) : void {
        writer.writeObjectValue<SynchronizationLinkedObjects>("links", synchronizationJobSubject.links, serializeSynchronizationLinkedObjects);
        writer.writeStringValue("objectId", synchronizationJobSubject.objectId);
        writer.writeStringValue("objectTypeName", synchronizationJobSubject.objectTypeName);
        writer.writeStringValue("@odata.type", synchronizationJobSubject.odataType);
        writer.writeAdditionalData(synchronizationJobSubject.additionalData);
}
