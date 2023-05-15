import {deserializeIntoAgreementFileVersionCollectionResponse} from './deserializeIntoAgreementFileVersionCollectionResponse';
import {AgreementFileVersionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAgreementFileVersionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAgreementFileVersionCollectionResponse;
}
