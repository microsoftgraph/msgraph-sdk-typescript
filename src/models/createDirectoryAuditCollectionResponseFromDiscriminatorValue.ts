import {DirectoryAuditCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDirectoryAuditCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DirectoryAuditCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DirectoryAuditCollectionResponseImpl();
}
