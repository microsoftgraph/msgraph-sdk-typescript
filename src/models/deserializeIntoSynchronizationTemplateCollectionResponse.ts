import {createSynchronizationTemplateFromDiscriminatorValue} from './createSynchronizationTemplateFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeSynchronizationTemplate} from './serializeSynchronizationTemplate';
import {SynchronizationTemplate} from './synchronizationTemplate';
import {SynchronizationTemplateCollectionResponse} from './synchronizationTemplateCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationTemplateCollectionResponse(synchronizationTemplateCollectionResponse: SynchronizationTemplateCollectionResponse | undefined = {} as SynchronizationTemplateCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(synchronizationTemplateCollectionResponse),
        "value": n => { synchronizationTemplateCollectionResponse.value = n.getCollectionOfObjectValues<SynchronizationTemplate>(createSynchronizationTemplateFromDiscriminatorValue); },
    }
}
