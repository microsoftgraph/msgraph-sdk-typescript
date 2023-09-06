import { deserializeIntoConditionalAccessSessionControls } from './deserializeIntoConditionalAccessSessionControls';
import { type ConditionalAccessSessionControls } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConditionalAccessSessionControlsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessSessionControls;
}
