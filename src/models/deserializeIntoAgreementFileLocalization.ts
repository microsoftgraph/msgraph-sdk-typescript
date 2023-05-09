import {AgreementFileLocalization} from './agreementFileLocalization';
import {AgreementFileVersion} from './agreementFileVersion';
import {createAgreementFileVersionFromDiscriminatorValue} from './createAgreementFileVersionFromDiscriminatorValue';
import {deserializeIntoAgreementFileProperties} from './deserializeIntoAgreementFileProperties';
import {serializeAgreementFileVersion} from './serializeAgreementFileVersion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAgreementFileLocalization(agreementFileLocalization: AgreementFileLocalization | undefined = {} as AgreementFileLocalization) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAgreementFileProperties(agreementFileLocalization),
        "versions": n => { agreementFileLocalization.versions = n.getCollectionOfObjectValues<AgreementFileVersion>(createAgreementFileVersionFromDiscriminatorValue); },
    }
}
