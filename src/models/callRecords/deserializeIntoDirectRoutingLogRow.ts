import {DirectRoutingLogRow} from './directRoutingLogRow';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectRoutingLogRow(directRoutingLogRow: DirectRoutingLogRow | undefined = {} as DirectRoutingLogRow) : Record<string, (node: ParseNode) => void> {
    return {
        "calleeNumber": n => { directRoutingLogRow.calleeNumber = n.getStringValue(); },
        "callEndSubReason": n => { directRoutingLogRow.callEndSubReason = n.getNumberValue(); },
        "callerNumber": n => { directRoutingLogRow.callerNumber = n.getStringValue(); },
        "callType": n => { directRoutingLogRow.callType = n.getStringValue(); },
        "correlationId": n => { directRoutingLogRow.correlationId = n.getStringValue(); },
        "duration": n => { directRoutingLogRow.duration = n.getNumberValue(); },
        "endDateTime": n => { directRoutingLogRow.endDateTime = n.getDateValue(); },
        "failureDateTime": n => { directRoutingLogRow.failureDateTime = n.getDateValue(); },
        "finalSipCode": n => { directRoutingLogRow.finalSipCode = n.getNumberValue(); },
        "finalSipCodePhrase": n => { directRoutingLogRow.finalSipCodePhrase = n.getStringValue(); },
        "id": n => { directRoutingLogRow.id = n.getStringValue(); },
        "inviteDateTime": n => { directRoutingLogRow.inviteDateTime = n.getDateValue(); },
        "mediaBypassEnabled": n => { directRoutingLogRow.mediaBypassEnabled = n.getBooleanValue(); },
        "mediaPathLocation": n => { directRoutingLogRow.mediaPathLocation = n.getStringValue(); },
        "@odata.type": n => { directRoutingLogRow.odataType = n.getStringValue(); },
        "signalingLocation": n => { directRoutingLogRow.signalingLocation = n.getStringValue(); },
        "startDateTime": n => { directRoutingLogRow.startDateTime = n.getDateValue(); },
        "successfulCall": n => { directRoutingLogRow.successfulCall = n.getBooleanValue(); },
        "trunkFullyQualifiedDomainName": n => { directRoutingLogRow.trunkFullyQualifiedDomainName = n.getStringValue(); },
        "userDisplayName": n => { directRoutingLogRow.userDisplayName = n.getStringValue(); },
        "userId": n => { directRoutingLogRow.userId = n.getStringValue(); },
        "userPrincipalName": n => { directRoutingLogRow.userPrincipalName = n.getStringValue(); },
    }
}
