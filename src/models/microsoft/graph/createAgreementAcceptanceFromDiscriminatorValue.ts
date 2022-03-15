import {AgreementAcceptance} from './agreementAcceptance';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAgreementAcceptanceFromDiscriminatorValue(parseNode: ParseNode | undefined) : AgreementAcceptance {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AgreementAcceptance();
}
