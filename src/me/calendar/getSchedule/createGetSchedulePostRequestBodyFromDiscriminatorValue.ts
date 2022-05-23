import {GetSchedulePostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetSchedulePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetSchedulePostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetSchedulePostRequestBodyImpl();
}
