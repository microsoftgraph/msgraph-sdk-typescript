import {GetVirtualAppointmentJoinWebUrlResponse} from './getVirtualAppointmentJoinWebUrlResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetVirtualAppointmentJoinWebUrlResponse(writer: SerializationWriter, getVirtualAppointmentJoinWebUrlResponse: GetVirtualAppointmentJoinWebUrlResponse | undefined = {} as GetVirtualAppointmentJoinWebUrlResponse) : void {
        writer.writeStringValue("value", getVirtualAppointmentJoinWebUrlResponse.value);
        writer.writeAdditionalData(getVirtualAppointmentJoinWebUrlResponse.additionalData);
}
