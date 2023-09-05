import { type AgreementFile } from './agreementFile';
import { type AgreementFileLocalization } from './agreementFileLocalization';
import { createAgreementFileLocalizationFromDiscriminatorValue } from './createAgreementFileLocalizationFromDiscriminatorValue';
import { deserializeIntoAgreementFileProperties } from './deserializeIntoAgreementFileProperties';
import { serializeAgreementFileLocalization } from './serializeAgreementFileLocalization';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAgreementFile(agreementFile: AgreementFile | undefined = {} as AgreementFile) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAgreementFileProperties(agreementFile),
        "localizations": n => { agreementFile.localizations = n.getCollectionOfObjectValues<AgreementFileLocalization>(createAgreementFileLocalizationFromDiscriminatorValue); },
    }
}
