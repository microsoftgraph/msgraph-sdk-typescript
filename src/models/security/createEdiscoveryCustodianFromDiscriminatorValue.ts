import { deserializeIntoEdiscoveryCustodian } from './deserializeIntoEdiscoveryCustodian';
import { type EdiscoveryCustodian } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEdiscoveryCustodianFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryCustodian;
}
