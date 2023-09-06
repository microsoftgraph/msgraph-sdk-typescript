import { deserializeIntoArchivePostRequestBody } from './deserializeIntoArchivePostRequestBody';
import { type ArchivePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createArchivePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoArchivePostRequestBody;
}
