import { deserializeIntoDirectoryAuditCollectionResponse } from './deserializeIntoDirectoryAuditCollectionResponse';
import { type DirectoryAuditCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDirectoryAuditCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDirectoryAuditCollectionResponse;
}
