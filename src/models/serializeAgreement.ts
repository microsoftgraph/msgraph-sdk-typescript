import type {Agreement} from './agreement';
import type {AgreementAcceptance} from './agreementAcceptance';
import type {AgreementFile} from './agreementFile';
import type {AgreementFileLocalization} from './agreementFileLocalization';
import {serializeAgreementAcceptance} from './serializeAgreementAcceptance';
import {serializeAgreementFile} from './serializeAgreementFile';
import {serializeAgreementFileLocalization} from './serializeAgreementFileLocalization';
import {serializeEntity} from './serializeEntity';
import {serializeTermsExpiration} from './serializeTermsExpiration';
import type {TermsExpiration} from './termsExpiration';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Duration} from '@microsoft/kiota-abstractions';

export function serializeAgreement(writer: SerializationWriter, agreement: Agreement | undefined = {} as Agreement) : void {
        serializeEntity(writer, agreement)
        writer.writeCollectionOfObjectValues<AgreementAcceptance>("acceptances", agreement.acceptances, serializeAgreementAcceptance);
        writer.writeStringValue("displayName", agreement.displayName);
        writer.writeObjectValue<AgreementFile>("file", agreement.file, serializeAgreementFile);
        writer.writeCollectionOfObjectValues<AgreementFileLocalization>("files", agreement.files, serializeAgreementFileLocalization);
        writer.writeBooleanValue("isPerDeviceAcceptanceRequired", agreement.isPerDeviceAcceptanceRequired);
        writer.writeBooleanValue("isViewingBeforeAcceptanceRequired", agreement.isViewingBeforeAcceptanceRequired);
        writer.writeObjectValue<TermsExpiration>("termsExpiration", agreement.termsExpiration, serializeTermsExpiration);
        writer.writeDurationValue("userReacceptRequiredFrequency", agreement.userReacceptRequiredFrequency);
}
