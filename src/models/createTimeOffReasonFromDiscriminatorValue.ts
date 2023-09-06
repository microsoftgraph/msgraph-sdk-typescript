import { deserializeIntoTimeOffReason } from './deserializeIntoTimeOffReason';
import { type TimeOffReason } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTimeOffReasonFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTimeOffReason;
}
