import { deserializeIntoAgreement } from './deserializeIntoAgreement';
import { type Agreement } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAgreementFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAgreement;
}
