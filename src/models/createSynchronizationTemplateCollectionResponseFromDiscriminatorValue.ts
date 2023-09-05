import { deserializeIntoSynchronizationTemplateCollectionResponse } from './deserializeIntoSynchronizationTemplateCollectionResponse';
import { type SynchronizationTemplateCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSynchronizationTemplateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationTemplateCollectionResponse;
}
