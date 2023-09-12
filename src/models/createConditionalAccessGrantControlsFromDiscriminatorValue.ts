import { deserializeIntoConditionalAccessGrantControls } from './deserializeIntoConditionalAccessGrantControls';
import { type ConditionalAccessGrantControls } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConditionalAccessGrantControlsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessGrantControls;
}
