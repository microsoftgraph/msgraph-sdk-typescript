import {deserializeIntoConditionalAccessDevices} from './deserializeIntoConditionalAccessDevices';
import {ConditionalAccessDevices} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessDevicesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessDevices;
}
