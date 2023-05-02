import {deserializeIntoConditionalAccessSessionControls} from './deserializeIntoConditionalAccessSessionControls';
import {ConditionalAccessSessionControls} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessSessionControlsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessSessionControls;
}
