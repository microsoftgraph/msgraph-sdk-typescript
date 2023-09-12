import { deserializeIntoAgreementFileVersion } from './deserializeIntoAgreementFileVersion';
import { type AgreementFileVersion } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAgreementFileVersionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAgreementFileVersion;
}
