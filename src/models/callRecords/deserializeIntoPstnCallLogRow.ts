import {PstnCallDurationSource} from './pstnCallDurationSource';
import {PstnCallLogRow} from './pstnCallLogRow';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPstnCallLogRow(pstnCallLogRow: PstnCallLogRow | undefined = {} as PstnCallLogRow) : Record<string, (node: ParseNode) => void> {
    return {
        "callDurationSource": n => { pstnCallLogRow.callDurationSource = n.getEnumValue<PstnCallDurationSource>(PstnCallDurationSource); },
        "calleeNumber": n => { pstnCallLogRow.calleeNumber = n.getStringValue(); },
        "callerNumber": n => { pstnCallLogRow.callerNumber = n.getStringValue(); },
        "callId": n => { pstnCallLogRow.callId = n.getStringValue(); },
        "callType": n => { pstnCallLogRow.callType = n.getStringValue(); },
        "charge": n => { pstnCallLogRow.charge = n.getNumberValue(); },
        "conferenceId": n => { pstnCallLogRow.conferenceId = n.getStringValue(); },
        "connectionCharge": n => { pstnCallLogRow.connectionCharge = n.getNumberValue(); },
        "currency": n => { pstnCallLogRow.currency = n.getStringValue(); },
        "destinationContext": n => { pstnCallLogRow.destinationContext = n.getStringValue(); },
        "destinationName": n => { pstnCallLogRow.destinationName = n.getStringValue(); },
        "duration": n => { pstnCallLogRow.duration = n.getNumberValue(); },
        "endDateTime": n => { pstnCallLogRow.endDateTime = n.getDateValue(); },
        "id": n => { pstnCallLogRow.id = n.getStringValue(); },
        "inventoryType": n => { pstnCallLogRow.inventoryType = n.getStringValue(); },
        "licenseCapability": n => { pstnCallLogRow.licenseCapability = n.getStringValue(); },
        "@odata.type": n => { pstnCallLogRow.odataType = n.getStringValue(); },
        "operator": n => { pstnCallLogRow.operator = n.getStringValue(); },
        "startDateTime": n => { pstnCallLogRow.startDateTime = n.getDateValue(); },
        "tenantCountryCode": n => { pstnCallLogRow.tenantCountryCode = n.getStringValue(); },
        "usageCountryCode": n => { pstnCallLogRow.usageCountryCode = n.getStringValue(); },
        "userDisplayName": n => { pstnCallLogRow.userDisplayName = n.getStringValue(); },
        "userId": n => { pstnCallLogRow.userId = n.getStringValue(); },
        "userPrincipalName": n => { pstnCallLogRow.userPrincipalName = n.getStringValue(); },
    }
}
