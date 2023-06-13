import {createSynchronizationJobFromDiscriminatorValue} from './createSynchronizationJobFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeSynchronizationJob} from './serializeSynchronizationJob';
import {SynchronizationJob} from './synchronizationJob';
import {SynchronizationJobCollectionResponse} from './synchronizationJobCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationJobCollectionResponse(synchronizationJobCollectionResponse: SynchronizationJobCollectionResponse | undefined = {} as SynchronizationJobCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(synchronizationJobCollectionResponse),
        "value": n => { synchronizationJobCollectionResponse.value = n.getCollectionOfObjectValues<SynchronizationJob>(createSynchronizationJobFromDiscriminatorValue); },
    }
}
