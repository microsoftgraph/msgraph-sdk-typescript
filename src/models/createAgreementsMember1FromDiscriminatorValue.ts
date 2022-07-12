import {AgreementsMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAgreementsMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : AgreementsMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AgreementsMember1();
}
