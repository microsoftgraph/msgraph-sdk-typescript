import { deserializeIntoGetVirtualAppointmentJoinWebUrlResponse } from './deserializeIntoGetVirtualAppointmentJoinWebUrlResponse';
import { type GetVirtualAppointmentJoinWebUrlResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetVirtualAppointmentJoinWebUrlResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetVirtualAppointmentJoinWebUrlResponse;
}
