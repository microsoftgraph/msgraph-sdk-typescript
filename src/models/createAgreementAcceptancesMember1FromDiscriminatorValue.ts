import {AgreementAcceptancesMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAgreementAcceptancesMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : AgreementAcceptancesMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AgreementAcceptancesMember1();
}
