import {deserializeIntoAgreementFileLocalization} from './deserializeIntoAgreementFileLocalization';
import {AgreementFileLocalization} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAgreementFileLocalizationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAgreementFileLocalization;
}
