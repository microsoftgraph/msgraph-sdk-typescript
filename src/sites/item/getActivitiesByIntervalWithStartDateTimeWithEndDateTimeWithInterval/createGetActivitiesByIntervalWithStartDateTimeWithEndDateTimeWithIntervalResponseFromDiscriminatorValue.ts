import { deserializeIntoGetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse } from './deserializeIntoGetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse';
import { type GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse;
}
