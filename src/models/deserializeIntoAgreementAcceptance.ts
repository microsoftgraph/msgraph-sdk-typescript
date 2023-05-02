import {AgreementAcceptance} from './agreementAcceptance';
import {AgreementAcceptanceState} from './agreementAcceptanceState';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAgreementAcceptance(agreementAcceptance: AgreementAcceptance | undefined = {} as AgreementAcceptance) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(agreementAcceptance),
        "agreementFileId": n => { agreementAcceptance.agreementFileId = n.getStringValue(); },
        "agreementId": n => { agreementAcceptance.agreementId = n.getStringValue(); },
        "deviceDisplayName": n => { agreementAcceptance.deviceDisplayName = n.getStringValue(); },
        "deviceId": n => { agreementAcceptance.deviceId = n.getStringValue(); },
        "deviceOSType": n => { agreementAcceptance.deviceOSType = n.getStringValue(); },
        "deviceOSVersion": n => { agreementAcceptance.deviceOSVersion = n.getStringValue(); },
        "expirationDateTime": n => { agreementAcceptance.expirationDateTime = n.getDateValue(); },
        "recordedDateTime": n => { agreementAcceptance.recordedDateTime = n.getDateValue(); },
        "state": n => { agreementAcceptance.state = n.getEnumValue<AgreementAcceptanceState>(AgreementAcceptanceState); },
        "userDisplayName": n => { agreementAcceptance.userDisplayName = n.getStringValue(); },
        "userEmail": n => { agreementAcceptance.userEmail = n.getStringValue(); },
        "userId": n => { agreementAcceptance.userId = n.getStringValue(); },
        "userPrincipalName": n => { agreementAcceptance.userPrincipalName = n.getStringValue(); },
    }
}
