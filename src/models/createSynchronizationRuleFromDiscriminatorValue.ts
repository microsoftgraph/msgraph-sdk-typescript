import {deserializeIntoSynchronizationRule} from './deserializeIntoSynchronizationRule';
import {SynchronizationRule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynchronizationRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSynchronizationRule;
}
