import { deserializeIntoAgreementFileLocalization } from './deserializeIntoAgreementFileLocalization';
import { type AgreementFileLocalization } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAgreementFileLocalizationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAgreementFileLocalization;
}
