import {PstnCallDurationSource} from './pstnCallDurationSource';
import type {PstnCallLogRow} from './pstnCallLogRow';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePstnCallLogRow(writer: SerializationWriter, pstnCallLogRow: PstnCallLogRow | undefined = {} as PstnCallLogRow) : void {
        writer.writeEnumValue<PstnCallDurationSource>("callDurationSource", pstnCallLogRow.callDurationSource);
        writer.writeStringValue("calleeNumber", pstnCallLogRow.calleeNumber);
        writer.writeStringValue("callerNumber", pstnCallLogRow.callerNumber);
        writer.writeStringValue("callId", pstnCallLogRow.callId);
        writer.writeStringValue("callType", pstnCallLogRow.callType);
        writer.writeNumberValue("charge", pstnCallLogRow.charge);
        writer.writeStringValue("conferenceId", pstnCallLogRow.conferenceId);
        writer.writeNumberValue("connectionCharge", pstnCallLogRow.connectionCharge);
        writer.writeStringValue("currency", pstnCallLogRow.currency);
        writer.writeStringValue("destinationContext", pstnCallLogRow.destinationContext);
        writer.writeStringValue("destinationName", pstnCallLogRow.destinationName);
        writer.writeNumberValue("duration", pstnCallLogRow.duration);
        writer.writeDateValue("endDateTime", pstnCallLogRow.endDateTime);
        writer.writeStringValue("id", pstnCallLogRow.id);
        writer.writeStringValue("inventoryType", pstnCallLogRow.inventoryType);
        writer.writeStringValue("licenseCapability", pstnCallLogRow.licenseCapability);
        writer.writeStringValue("@odata.type", pstnCallLogRow.odataType);
        writer.writeStringValue("operator", pstnCallLogRow.operator);
        writer.writeDateValue("startDateTime", pstnCallLogRow.startDateTime);
        writer.writeStringValue("tenantCountryCode", pstnCallLogRow.tenantCountryCode);
        writer.writeStringValue("usageCountryCode", pstnCallLogRow.usageCountryCode);
        writer.writeStringValue("userDisplayName", pstnCallLogRow.userDisplayName);
        writer.writeStringValue("userId", pstnCallLogRow.userId);
        writer.writeStringValue("userPrincipalName", pstnCallLogRow.userPrincipalName);
        writer.writeAdditionalData(pstnCallLogRow.additionalData);
}
