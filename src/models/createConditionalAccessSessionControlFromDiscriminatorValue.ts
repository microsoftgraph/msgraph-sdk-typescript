import {ConditionalAccessSessionControlImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessSessionControlFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessSessionControlImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessSessionControlImpl();
}
