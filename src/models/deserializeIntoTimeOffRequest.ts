import {deserializeIntoScheduleChangeRequest} from './deserializeIntoScheduleChangeRequest';
import {TimeOffRequest} from './timeOffRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeOffRequest(timeOffRequest: TimeOffRequest | undefined = {} as TimeOffRequest) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoScheduleChangeRequest(timeOffRequest),
        "endDateTime": n => { timeOffRequest.endDateTime = n.getDateValue(); },
        "startDateTime": n => { timeOffRequest.startDateTime = n.getDateValue(); },
        "timeOffReasonId": n => { timeOffRequest.timeOffReasonId = n.getStringValue(); },
    }
}
