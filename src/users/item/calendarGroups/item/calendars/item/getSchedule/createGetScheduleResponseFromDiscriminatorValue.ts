import {GetScheduleResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetScheduleResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetScheduleResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetScheduleResponseImpl();
}
