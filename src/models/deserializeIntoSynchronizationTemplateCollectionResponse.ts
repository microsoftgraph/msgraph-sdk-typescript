import {createSynchronizationTemplateFromDiscriminatorValue} from './createSynchronizationTemplateFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeSynchronizationTemplate} from './serializeSynchronizationTemplate';
import type {SynchronizationTemplate} from './synchronizationTemplate';
import type {SynchronizationTemplateCollectionResponse} from './synchronizationTemplateCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationTemplateCollectionResponse(synchronizationTemplateCollectionResponse: SynchronizationTemplateCollectionResponse | undefined = {} as SynchronizationTemplateCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(synchronizationTemplateCollectionResponse),
        "value": n => { synchronizationTemplateCollectionResponse.value = n.getCollectionOfObjectValues<SynchronizationTemplate>(createSynchronizationTemplateFromDiscriminatorValue); },
    }
}
