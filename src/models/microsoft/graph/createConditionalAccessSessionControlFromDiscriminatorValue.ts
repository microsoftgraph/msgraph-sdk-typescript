import {ConditionalAccessSessionControl} from './conditionalAccessSessionControl';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessSessionControlFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessSessionControl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessSessionControl();
}
