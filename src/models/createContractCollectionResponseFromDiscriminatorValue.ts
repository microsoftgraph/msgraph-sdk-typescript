import {ContractCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContractCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ContractCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ContractCollectionResponseImpl();
}
