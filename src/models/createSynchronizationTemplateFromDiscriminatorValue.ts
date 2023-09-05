import { deserializeIntoSynchronizationTemplate } from './deserializeIntoSynchronizationTemplate';
import { type SynchronizationTemplate } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSynchronizationTemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationTemplate;
}
