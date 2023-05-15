import {deserializeIntoDirectoryAuditCollectionResponse} from './deserializeIntoDirectoryAuditCollectionResponse';
import {DirectoryAuditCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDirectoryAuditCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDirectoryAuditCollectionResponse;
}
