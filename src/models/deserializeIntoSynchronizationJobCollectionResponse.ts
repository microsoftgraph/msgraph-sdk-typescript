import { createSynchronizationJobFromDiscriminatorValue } from './createSynchronizationJobFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeSynchronizationJob } from './serializeSynchronizationJob';
import { type SynchronizationJob } from './synchronizationJob';
import { type SynchronizationJobCollectionResponse } from './synchronizationJobCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationJobCollectionResponse(synchronizationJobCollectionResponse: SynchronizationJobCollectionResponse | undefined = {} as SynchronizationJobCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(synchronizationJobCollectionResponse),
        "value": n => { synchronizationJobCollectionResponse.value = n.getCollectionOfObjectValues<SynchronizationJob>(createSynchronizationJobFromDiscriminatorValue); },
    }
}
