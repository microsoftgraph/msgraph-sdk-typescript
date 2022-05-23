import {GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponseImpl();
}
