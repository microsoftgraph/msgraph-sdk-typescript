import {deserializeIntoHashes} from './deserializeIntoHashes';
import {Hashes} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHashesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHashes;
}
