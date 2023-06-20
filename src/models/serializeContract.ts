import {Contract} from './contract';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContract(contract: Contract | undefined = {} as Contract, writer: SerializationWriter) : void {
        serializeDirectoryObject(writer, contract)
        writer.writeStringValue("contractType", contract.contractType);
        writer.writeStringValue("customerId", contract.customerId);
        writer.writeStringValue("defaultDomainName", contract.defaultDomainName);
        writer.writeStringValue("displayName", contract.displayName);
}
