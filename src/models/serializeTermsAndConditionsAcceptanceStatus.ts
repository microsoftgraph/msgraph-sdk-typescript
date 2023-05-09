import {serializeEntity} from './serializeEntity';
import {serializeTermsAndConditions} from './serializeTermsAndConditions';
import {TermsAndConditions} from './termsAndConditions';
import {TermsAndConditionsAcceptanceStatus} from './termsAndConditionsAcceptanceStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTermsAndConditionsAcceptanceStatus(writer: SerializationWriter, termsAndConditionsAcceptanceStatus: TermsAndConditionsAcceptanceStatus | undefined = {} as TermsAndConditionsAcceptanceStatus) : void {
        serializeEntity(writer, termsAndConditionsAcceptanceStatus)
        writer.writeDateValue("acceptedDateTime", termsAndConditionsAcceptanceStatus.acceptedDateTime);
        writer.writeNumberValue("acceptedVersion", termsAndConditionsAcceptanceStatus.acceptedVersion);
        writer.writeObjectValue<TermsAndConditions>("termsAndConditions", termsAndConditionsAcceptanceStatus.termsAndConditions, serializeTermsAndConditions);
        writer.writeStringValue("userDisplayName", termsAndConditionsAcceptanceStatus.userDisplayName);
        writer.writeStringValue("userPrincipalName", termsAndConditionsAcceptanceStatus.userPrincipalName);
}
