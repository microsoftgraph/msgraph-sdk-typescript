import {TimeRangeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimeRangeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimeRangeImpl();
}
