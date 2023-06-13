import {deserializeIntoGetVirtualAppointmentJoinWebUrlResponse} from './deserializeIntoGetVirtualAppointmentJoinWebUrlResponse';
import {GetVirtualAppointmentJoinWebUrlResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetVirtualAppointmentJoinWebUrlResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetVirtualAppointmentJoinWebUrlResponse;
}
