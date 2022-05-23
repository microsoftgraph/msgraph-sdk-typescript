import {TimeOffReasonImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeOffReasonFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimeOffReasonImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimeOffReasonImpl();
}
