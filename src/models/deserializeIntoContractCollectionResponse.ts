import { type Contract } from './contract';
import { type ContractCollectionResponse } from './contractCollectionResponse';
import { createContractFromDiscriminatorValue } from './createContractFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeContract } from './serializeContract';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoContractCollectionResponse(contractCollectionResponse: ContractCollectionResponse | undefined = {} as ContractCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(contractCollectionResponse),
        "value": n => { contractCollectionResponse.value = n.getCollectionOfObjectValues<Contract>(createContractFromDiscriminatorValue); },
    }
}
