import {deserializeIntoContractCollectionResponse} from './deserializeIntoContractCollectionResponse';
import {ContractCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContractCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContractCollectionResponse;
}
