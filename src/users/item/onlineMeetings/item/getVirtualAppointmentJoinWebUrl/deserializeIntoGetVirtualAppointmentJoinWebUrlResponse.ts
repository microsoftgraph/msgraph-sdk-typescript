import {GetVirtualAppointmentJoinWebUrlResponse} from './getVirtualAppointmentJoinWebUrlResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetVirtualAppointmentJoinWebUrlResponse(getVirtualAppointmentJoinWebUrlResponse: GetVirtualAppointmentJoinWebUrlResponse | undefined = {} as GetVirtualAppointmentJoinWebUrlResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { getVirtualAppointmentJoinWebUrlResponse.value = n.getStringValue(); },
    }
}
