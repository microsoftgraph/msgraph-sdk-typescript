import { type DirectRoutingLogRow } from './directRoutingLogRow';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDirectRoutingLogRow(writer: SerializationWriter, directRoutingLogRow: DirectRoutingLogRow | undefined = {} as DirectRoutingLogRow) : void {
        writer.writeStringValue("calleeNumber", directRoutingLogRow.calleeNumber);
        writer.writeNumberValue("callEndSubReason", directRoutingLogRow.callEndSubReason);
        writer.writeStringValue("callerNumber", directRoutingLogRow.callerNumber);
        writer.writeStringValue("callType", directRoutingLogRow.callType);
        writer.writeStringValue("correlationId", directRoutingLogRow.correlationId);
        writer.writeNumberValue("duration", directRoutingLogRow.duration);
        writer.writeDateValue("endDateTime", directRoutingLogRow.endDateTime);
        writer.writeDateValue("failureDateTime", directRoutingLogRow.failureDateTime);
        writer.writeNumberValue("finalSipCode", directRoutingLogRow.finalSipCode);
        writer.writeStringValue("finalSipCodePhrase", directRoutingLogRow.finalSipCodePhrase);
        writer.writeStringValue("id", directRoutingLogRow.id);
        writer.writeDateValue("inviteDateTime", directRoutingLogRow.inviteDateTime);
        writer.writeBooleanValue("mediaBypassEnabled", directRoutingLogRow.mediaBypassEnabled);
        writer.writeStringValue("mediaPathLocation", directRoutingLogRow.mediaPathLocation);
        writer.writeStringValue("@odata.type", directRoutingLogRow.odataType);
        writer.writeStringValue("signalingLocation", directRoutingLogRow.signalingLocation);
        writer.writeDateValue("startDateTime", directRoutingLogRow.startDateTime);
        writer.writeBooleanValue("successfulCall", directRoutingLogRow.successfulCall);
        writer.writeStringValue("trunkFullyQualifiedDomainName", directRoutingLogRow.trunkFullyQualifiedDomainName);
        writer.writeStringValue("userDisplayName", directRoutingLogRow.userDisplayName);
        writer.writeStringValue("userId", directRoutingLogRow.userId);
        writer.writeStringValue("userPrincipalName", directRoutingLogRow.userPrincipalName);
        writer.writeAdditionalData(directRoutingLogRow.additionalData);
}
