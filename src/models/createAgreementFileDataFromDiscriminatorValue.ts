import {AgreementFileDataImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAgreementFileDataFromDiscriminatorValue(parseNode: ParseNode | undefined) : AgreementFileDataImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AgreementFileDataImpl();
}
