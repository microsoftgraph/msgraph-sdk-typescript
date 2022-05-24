import {ScheduleActionsForRulesPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScheduleActionsForRulesPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ScheduleActionsForRulesPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ScheduleActionsForRulesPostRequestBodyImpl();
}
