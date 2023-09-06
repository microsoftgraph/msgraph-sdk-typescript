import { deserializeIntoArchiveResponse } from './deserializeIntoArchiveResponse';
import { type ArchiveResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createArchiveResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoArchiveResponse;
}
