import { type Contract } from './contract';
import { serializeDirectoryObject } from './serializeDirectoryObject';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';
import { Guid } from 'guid-typescript';

export function serializeContract(writer: SerializationWriter, contract: Contract | undefined = {} as Contract) : void {
        serializeDirectoryObject(writer, contract)
        writer.writeStringValue("contractType", contract.contractType);
        writer.writeGuidValue("customerId", contract.customerId);
        writer.writeStringValue("defaultDomainName", contract.defaultDomainName);
        writer.writeStringValue("displayName", contract.displayName);
}
