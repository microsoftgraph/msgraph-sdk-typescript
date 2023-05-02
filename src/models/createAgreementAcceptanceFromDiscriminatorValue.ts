import {deserializeIntoAgreementAcceptance} from './deserializeIntoAgreementAcceptance';
import {AgreementAcceptance} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAgreementAcceptanceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAgreementAcceptance;
}
