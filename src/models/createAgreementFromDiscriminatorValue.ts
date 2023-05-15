import {deserializeIntoAgreement} from './deserializeIntoAgreement';
import {Agreement} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAgreementFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAgreement;
}
