import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeSynchronizationTemplate } from './serializeSynchronizationTemplate';
import { type SynchronizationTemplate } from './synchronizationTemplate';
import { type SynchronizationTemplateCollectionResponse } from './synchronizationTemplateCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSynchronizationTemplateCollectionResponse(writer: SerializationWriter, synchronizationTemplateCollectionResponse: SynchronizationTemplateCollectionResponse | undefined = {} as SynchronizationTemplateCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, synchronizationTemplateCollectionResponse)
        writer.writeCollectionOfObjectValues<SynchronizationTemplate>("value", synchronizationTemplateCollectionResponse.value, serializeSynchronizationTemplate);
}
