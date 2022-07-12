import {GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalMember1();
}
