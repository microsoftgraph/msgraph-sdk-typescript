import { deserializeIntoAgreementFile } from './deserializeIntoAgreementFile';
import { type AgreementFile } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAgreementFileFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAgreementFile;
}
