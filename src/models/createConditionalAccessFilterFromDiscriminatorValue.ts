import {ConditionalAccessFilterImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessFilterFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessFilterImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessFilterImpl();
}
