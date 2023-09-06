import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeSynchronizationJob } from './serializeSynchronizationJob';
import { type SynchronizationJob } from './synchronizationJob';
import { type SynchronizationJobCollectionResponse } from './synchronizationJobCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSynchronizationJobCollectionResponse(writer: SerializationWriter, synchronizationJobCollectionResponse: SynchronizationJobCollectionResponse | undefined = {} as SynchronizationJobCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, synchronizationJobCollectionResponse)
        writer.writeCollectionOfObjectValues<SynchronizationJob>("value", synchronizationJobCollectionResponse.value, serializeSynchronizationJob);
}
