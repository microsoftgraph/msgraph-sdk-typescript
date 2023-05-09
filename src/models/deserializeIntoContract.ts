import {Contract} from './contract';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContract(contract: Contract | undefined = {} as Contract) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(contract),
        "contractType": n => { contract.contractType = n.getStringValue(); },
        "customerId": n => { contract.customerId = n.getStringValue(); },
        "defaultDomainName": n => { contract.defaultDomainName = n.getStringValue(); },
        "displayName": n => { contract.displayName = n.getStringValue(); },
    }
}
