import {ScheduleActionsForRulesPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScheduleActionsForRulesPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ScheduleActionsForRulesPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ScheduleActionsForRulesPostRequestBody();
}
