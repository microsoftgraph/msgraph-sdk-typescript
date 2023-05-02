import {serializeScheduleChangeRequest} from './serializeScheduleChangeRequest';
import {TimeOffRequest} from './timeOffRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimeOffRequest(writer: SerializationWriter, timeOffRequest: TimeOffRequest | undefined = {} as TimeOffRequest) : void {
        serializeScheduleChangeRequest(writer, timeOffRequest)
        writer.writeDateValue("endDateTime", timeOffRequest.endDateTime);
        writer.writeDateValue("startDateTime", timeOffRequest.startDateTime);
        writer.writeStringValue("timeOffReasonId", timeOffRequest.timeOffReasonId);
}
