import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSynchronizationTemplate} from './serializeSynchronizationTemplate';
import {SynchronizationTemplate} from './synchronizationTemplate';
import {SynchronizationTemplateCollectionResponse} from './synchronizationTemplateCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSynchronizationTemplateCollectionResponse(writer: SerializationWriter, synchronizationTemplateCollectionResponse: SynchronizationTemplateCollectionResponse | undefined = {} as SynchronizationTemplateCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, synchronizationTemplateCollectionResponse)
        writer.writeCollectionOfObjectValues<SynchronizationTemplate>("value", synchronizationTemplateCollectionResponse.value, serializeSynchronizationTemplate);
}
