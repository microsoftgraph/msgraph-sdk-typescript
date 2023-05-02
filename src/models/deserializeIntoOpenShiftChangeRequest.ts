import {deserializeIntoScheduleChangeRequest} from './deserializeIntoScheduleChangeRequest';
import {OpenShiftChangeRequest} from './openShiftChangeRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOpenShiftChangeRequest(openShiftChangeRequest: OpenShiftChangeRequest | undefined = {} as OpenShiftChangeRequest) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoScheduleChangeRequest(openShiftChangeRequest),
        "openShiftId": n => { openShiftChangeRequest.openShiftId = n.getStringValue(); },
    }
}
