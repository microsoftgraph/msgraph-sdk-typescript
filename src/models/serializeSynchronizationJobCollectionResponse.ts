import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSynchronizationJob} from './serializeSynchronizationJob';
import {SynchronizationJob} from './synchronizationJob';
import {SynchronizationJobCollectionResponse} from './synchronizationJobCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSynchronizationJobCollectionResponse(writer: SerializationWriter, synchronizationJobCollectionResponse: SynchronizationJobCollectionResponse | undefined = {} as SynchronizationJobCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, synchronizationJobCollectionResponse)
        writer.writeCollectionOfObjectValues<SynchronizationJob>("value", synchronizationJobCollectionResponse.value, serializeSynchronizationJob);
}
