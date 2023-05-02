import {deserializeIntoConditionalAccessGrantControls} from './deserializeIntoConditionalAccessGrantControls';
import {ConditionalAccessGrantControls} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessGrantControlsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessGrantControls;
}
