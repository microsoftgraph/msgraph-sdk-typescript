import {deserializeIntoAgreementFile} from './deserializeIntoAgreementFile';
import {AgreementFile} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAgreementFileFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAgreementFile;
}
