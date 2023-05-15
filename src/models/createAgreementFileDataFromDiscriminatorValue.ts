import {deserializeIntoAgreementFileData} from './deserializeIntoAgreementFileData';
import {AgreementFileData} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAgreementFileDataFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAgreementFileData;
}
