import {deserializeIntoTriggerTypesRoot} from './deserializeIntoTriggerTypesRoot';
import {TriggerTypesRoot} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTriggerTypesRootFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTriggerTypesRoot;
}
