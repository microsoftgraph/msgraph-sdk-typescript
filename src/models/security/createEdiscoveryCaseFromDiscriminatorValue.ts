import { deserializeIntoEdiscoveryCase } from './deserializeIntoEdiscoveryCase';
import { type EdiscoveryCase } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEdiscoveryCaseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryCase;
}
