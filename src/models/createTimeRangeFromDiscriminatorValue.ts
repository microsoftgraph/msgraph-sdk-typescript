import { deserializeIntoTimeRange } from './deserializeIntoTimeRange';
import { type TimeRange } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTimeRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTimeRange;
}
