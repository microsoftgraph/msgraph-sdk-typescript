import {GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse} from './getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse();
}
