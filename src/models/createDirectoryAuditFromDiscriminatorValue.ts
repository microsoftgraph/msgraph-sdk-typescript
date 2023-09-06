import { deserializeIntoDirectoryAudit } from './deserializeIntoDirectoryAudit';
import { type DirectoryAudit } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDirectoryAuditFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDirectoryAudit;
}
