import { type GetVirtualAppointmentJoinWebUrlResponse } from './getVirtualAppointmentJoinWebUrlResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGetVirtualAppointmentJoinWebUrlResponse(getVirtualAppointmentJoinWebUrlResponse: GetVirtualAppointmentJoinWebUrlResponse | undefined = {} as GetVirtualAppointmentJoinWebUrlResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { getVirtualAppointmentJoinWebUrlResponse.value = n.getStringValue(); },
    }
}
