import {AgreementFileImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAgreementFileFromDiscriminatorValue(parseNode: ParseNode | undefined) : AgreementFileImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AgreementFileImpl();
}
