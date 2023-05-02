import {Contract} from './contract';
import {ContractCollectionResponse} from './contractCollectionResponse';
import {createContractFromDiscriminatorValue} from './createContractFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeContract} from './serializeContract';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContractCollectionResponse(contractCollectionResponse: ContractCollectionResponse | undefined = {} as ContractCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(contractCollectionResponse),
        "value": n => { contractCollectionResponse.value = n.getCollectionOfObjectValues<Contract>(createContractFromDiscriminatorValue); },
    }
}
