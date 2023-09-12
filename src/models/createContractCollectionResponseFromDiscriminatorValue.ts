import { deserializeIntoContractCollectionResponse } from './deserializeIntoContractCollectionResponse';
import { type ContractCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createContractCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContractCollectionResponse;
}
