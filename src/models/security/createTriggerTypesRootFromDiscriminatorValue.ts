import { deserializeIntoTriggerTypesRoot } from './deserializeIntoTriggerTypesRoot';
import { type TriggerTypesRoot } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTriggerTypesRootFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTriggerTypesRoot;
}
