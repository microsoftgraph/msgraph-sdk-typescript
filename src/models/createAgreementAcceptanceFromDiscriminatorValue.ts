import {AgreementAcceptanceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAgreementAcceptanceFromDiscriminatorValue(parseNode: ParseNode | undefined) : AgreementAcceptanceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AgreementAcceptanceImpl();
}
