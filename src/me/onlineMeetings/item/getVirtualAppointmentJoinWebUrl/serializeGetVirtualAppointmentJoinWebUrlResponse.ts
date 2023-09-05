import { type GetVirtualAppointmentJoinWebUrlResponse } from './getVirtualAppointmentJoinWebUrlResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGetVirtualAppointmentJoinWebUrlResponse(writer: SerializationWriter, getVirtualAppointmentJoinWebUrlResponse: GetVirtualAppointmentJoinWebUrlResponse | undefined = {} as GetVirtualAppointmentJoinWebUrlResponse) : void {
        writer.writeStringValue("value", getVirtualAppointmentJoinWebUrlResponse.value);
        writer.writeAdditionalData(getVirtualAppointmentJoinWebUrlResponse.additionalData);
}
