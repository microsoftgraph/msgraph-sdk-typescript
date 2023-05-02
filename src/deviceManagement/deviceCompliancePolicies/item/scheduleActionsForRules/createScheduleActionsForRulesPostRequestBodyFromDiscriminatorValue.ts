import {deserializeIntoScheduleActionsForRulesPostRequestBody} from './deserializeIntoScheduleActionsForRulesPostRequestBody';
import {ScheduleActionsForRulesPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScheduleActionsForRulesPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoScheduleActionsForRulesPostRequestBody;
}
