import {ConditionalAccessRootImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessRootFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessRootImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessRootImpl();
}
