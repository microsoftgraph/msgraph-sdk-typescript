import {deserializeIntoTriggersRoot} from './deserializeIntoTriggersRoot';
import {TriggersRoot} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTriggersRootFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTriggersRoot;
}
