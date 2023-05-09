import {AgreementFile} from './agreementFile';
import {AgreementFileLocalization} from './agreementFileLocalization';
import {createAgreementFileLocalizationFromDiscriminatorValue} from './createAgreementFileLocalizationFromDiscriminatorValue';
import {deserializeIntoAgreementFileProperties} from './deserializeIntoAgreementFileProperties';
import {serializeAgreementFileLocalization} from './serializeAgreementFileLocalization';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAgreementFile(agreementFile: AgreementFile | undefined = {} as AgreementFile) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAgreementFileProperties(agreementFile),
        "localizations": n => { agreementFile.localizations = n.getCollectionOfObjectValues<AgreementFileLocalization>(createAgreementFileLocalizationFromDiscriminatorValue); },
    }
}
