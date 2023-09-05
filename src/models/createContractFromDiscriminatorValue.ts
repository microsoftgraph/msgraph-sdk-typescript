import { deserializeIntoContract } from './deserializeIntoContract';
import { type Contract } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createContractFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContract;
}
