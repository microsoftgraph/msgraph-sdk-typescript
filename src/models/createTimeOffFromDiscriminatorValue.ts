import { deserializeIntoTimeOff } from './deserializeIntoTimeOff';
import { type TimeOff } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTimeOffFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTimeOff;
}
