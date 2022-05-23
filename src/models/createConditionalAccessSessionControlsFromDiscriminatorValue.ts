import {ConditionalAccessSessionControlsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessSessionControlsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessSessionControlsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessSessionControlsImpl();
}
