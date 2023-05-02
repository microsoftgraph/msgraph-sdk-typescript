import {deserializeIntoConditionalAccessRoot} from './deserializeIntoConditionalAccessRoot';
import {ConditionalAccessRoot} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessRootFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessRoot;
}
