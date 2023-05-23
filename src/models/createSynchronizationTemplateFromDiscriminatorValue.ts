import {deserializeIntoSynchronizationTemplate} from './deserializeIntoSynchronizationTemplate';
import {SynchronizationTemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynchronizationTemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationTemplate;
}
