import {GetVirtualAppointmentJoinWebUrlResponse} from './getVirtualAppointmentJoinWebUrlResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetVirtualAppointmentJoinWebUrlResponse(getVirtualAppointmentJoinWebUrlResponse: GetVirtualAppointmentJoinWebUrlResponse | undefined = {} as GetVirtualAppointmentJoinWebUrlResponse, writer: SerializationWriter) : void {
        writer.writeStringValue("value", getVirtualAppointmentJoinWebUrlResponse.value);
        writer.writeAdditionalData(getVirtualAppointmentJoinWebUrlResponse.additionalData);
}
