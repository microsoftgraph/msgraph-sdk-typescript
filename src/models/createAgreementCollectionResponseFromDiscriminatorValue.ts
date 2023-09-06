import { deserializeIntoAgreementCollectionResponse } from './deserializeIntoAgreementCollectionResponse';
import { type AgreementCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAgreementCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAgreementCollectionResponse;
}
