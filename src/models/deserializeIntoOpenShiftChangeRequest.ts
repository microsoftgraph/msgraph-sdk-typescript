import { deserializeIntoScheduleChangeRequest } from './deserializeIntoScheduleChangeRequest';
import { type OpenShiftChangeRequest } from './openShiftChangeRequest';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOpenShiftChangeRequest(openShiftChangeRequest: OpenShiftChangeRequest | undefined = {} as OpenShiftChangeRequest) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoScheduleChangeRequest(openShiftChangeRequest),
        "openShiftId": n => { openShiftChangeRequest.openShiftId = n.getStringValue(); },
    }
}
