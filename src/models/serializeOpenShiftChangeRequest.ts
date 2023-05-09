import {OpenShiftChangeRequest} from './openShiftChangeRequest';
import {serializeScheduleChangeRequest} from './serializeScheduleChangeRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOpenShiftChangeRequest(writer: SerializationWriter, openShiftChangeRequest: OpenShiftChangeRequest | undefined = {} as OpenShiftChangeRequest) : void {
        serializeScheduleChangeRequest(writer, openShiftChangeRequest)
        writer.writeStringValue("openShiftId", openShiftChangeRequest.openShiftId);
}
