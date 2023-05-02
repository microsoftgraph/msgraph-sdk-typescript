import {deserializeIntoTimeRange} from './deserializeIntoTimeRange';
import {TimeRange} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTimeRange;
}
