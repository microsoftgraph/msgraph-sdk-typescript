import { type Agreement } from './agreement';
import { type AgreementAcceptance } from './agreementAcceptance';
import { type AgreementFile } from './agreementFile';
import { type AgreementFileLocalization } from './agreementFileLocalization';
import { createAgreementAcceptanceFromDiscriminatorValue } from './createAgreementAcceptanceFromDiscriminatorValue';
import { createAgreementFileFromDiscriminatorValue } from './createAgreementFileFromDiscriminatorValue';
import { createAgreementFileLocalizationFromDiscriminatorValue } from './createAgreementFileLocalizationFromDiscriminatorValue';
import { createTermsExpirationFromDiscriminatorValue } from './createTermsExpirationFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeAgreementAcceptance } from './serializeAgreementAcceptance';
import { serializeAgreementFile } from './serializeAgreementFile';
import { serializeAgreementFileLocalization } from './serializeAgreementFileLocalization';
import { serializeTermsExpiration } from './serializeTermsExpiration';
import { type TermsExpiration } from './termsExpiration';
import { Duration, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAgreement(agreement: Agreement | undefined = {} as Agreement) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(agreement),
        "acceptances": n => { agreement.acceptances = n.getCollectionOfObjectValues<AgreementAcceptance>(createAgreementAcceptanceFromDiscriminatorValue); },
        "displayName": n => { agreement.displayName = n.getStringValue(); },
        "file": n => { agreement.file = n.getObjectValue<AgreementFile>(createAgreementFileFromDiscriminatorValue); },
        "files": n => { agreement.files = n.getCollectionOfObjectValues<AgreementFileLocalization>(createAgreementFileLocalizationFromDiscriminatorValue); },
        "isPerDeviceAcceptanceRequired": n => { agreement.isPerDeviceAcceptanceRequired = n.getBooleanValue(); },
        "isViewingBeforeAcceptanceRequired": n => { agreement.isViewingBeforeAcceptanceRequired = n.getBooleanValue(); },
        "termsExpiration": n => { agreement.termsExpiration = n.getObjectValue<TermsExpiration>(createTermsExpirationFromDiscriminatorValue); },
        "userReacceptRequiredFrequency": n => { agreement.userReacceptRequiredFrequency = n.getDurationValue(); },
    }
}
