import { deserializeIntoHashes } from './deserializeIntoHashes';
import { type Hashes } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createHashesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHashes;
}
