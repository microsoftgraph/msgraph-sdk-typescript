import { deserializeIntoFileHash } from './deserializeIntoFileHash';
import { type FileHash } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFileHashFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFileHash;
}
