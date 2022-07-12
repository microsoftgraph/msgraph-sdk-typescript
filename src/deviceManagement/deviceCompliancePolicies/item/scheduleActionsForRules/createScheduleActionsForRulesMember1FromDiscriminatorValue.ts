import {ScheduleActionsForRulesMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScheduleActionsForRulesMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : ScheduleActionsForRulesMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ScheduleActionsForRulesMember1();
}
