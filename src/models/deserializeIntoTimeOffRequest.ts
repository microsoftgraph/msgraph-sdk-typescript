import { deserializeIntoScheduleChangeRequest } from './deserializeIntoScheduleChangeRequest';
import { type TimeOffRequest } from './timeOffRequest';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeOffRequest(timeOffRequest: TimeOffRequest | undefined = {} as TimeOffRequest) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoScheduleChangeRequest(timeOffRequest),
        "endDateTime": n => { timeOffRequest.endDateTime = n.getDateValue(); },
        "startDateTime": n => { timeOffRequest.startDateTime = n.getDateValue(); },
        "timeOffReasonId": n => { timeOffRequest.timeOffReasonId = n.getStringValue(); },
    }
}
