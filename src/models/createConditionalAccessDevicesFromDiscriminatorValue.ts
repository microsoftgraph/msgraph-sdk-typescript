import { deserializeIntoConditionalAccessDevices } from './deserializeIntoConditionalAccessDevices';
import { type ConditionalAccessDevices } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConditionalAccessDevicesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessDevices;
}
