import {AgreementFileLocalizationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAgreementFileLocalizationFromDiscriminatorValue(parseNode: ParseNode | undefined) : AgreementFileLocalizationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AgreementFileLocalizationImpl();
}
