import {AgreementAcceptance} from './agreementAcceptance';
import {AgreementAcceptanceState} from './agreementAcceptanceState';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAgreementAcceptance(writer: SerializationWriter, agreementAcceptance: AgreementAcceptance | undefined = {} as AgreementAcceptance) : void {
        serializeEntity(writer, agreementAcceptance)
        writer.writeStringValue("agreementFileId", agreementAcceptance.agreementFileId);
        writer.writeStringValue("agreementId", agreementAcceptance.agreementId);
        writer.writeStringValue("deviceDisplayName", agreementAcceptance.deviceDisplayName);
        writer.writeStringValue("deviceId", agreementAcceptance.deviceId);
        writer.writeStringValue("deviceOSType", agreementAcceptance.deviceOSType);
        writer.writeStringValue("deviceOSVersion", agreementAcceptance.deviceOSVersion);
        writer.writeDateValue("expirationDateTime", agreementAcceptance.expirationDateTime);
        writer.writeDateValue("recordedDateTime", agreementAcceptance.recordedDateTime);
        writer.writeEnumValue<AgreementAcceptanceState>("state", agreementAcceptance.state);
        writer.writeStringValue("userDisplayName", agreementAcceptance.userDisplayName);
        writer.writeStringValue("userEmail", agreementAcceptance.userEmail);
        writer.writeStringValue("userId", agreementAcceptance.userId);
        writer.writeStringValue("userPrincipalName", agreementAcceptance.userPrincipalName);
}
