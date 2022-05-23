import {AgreementFileVersionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAgreementFileVersionFromDiscriminatorValue(parseNode: ParseNode | undefined) : AgreementFileVersionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AgreementFileVersionImpl();
}
