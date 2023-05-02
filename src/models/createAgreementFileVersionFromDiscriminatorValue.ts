import {deserializeIntoAgreementFileVersion} from './deserializeIntoAgreementFileVersion';
import {AgreementFileVersion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAgreementFileVersionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAgreementFileVersion;
}
