import {ConditionalAccessGrantControlsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessGrantControlsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessGrantControlsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessGrantControlsImpl();
}
