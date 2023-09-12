import { deserializeIntoAgreementFileVersionCollectionResponse } from './deserializeIntoAgreementFileVersionCollectionResponse';
import { type AgreementFileVersionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAgreementFileVersionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAgreementFileVersionCollectionResponse;
}
