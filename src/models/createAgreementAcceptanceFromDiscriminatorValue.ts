import { deserializeIntoAgreementAcceptance } from './deserializeIntoAgreementAcceptance';
import { type AgreementAcceptance } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAgreementAcceptanceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAgreementAcceptance;
}
