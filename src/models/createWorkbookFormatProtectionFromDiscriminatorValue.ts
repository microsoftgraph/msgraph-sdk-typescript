import { deserializeIntoWorkbookFormatProtection } from './deserializeIntoWorkbookFormatProtection';
import { type WorkbookFormatProtection } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookFormatProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookFormatProtection;
}
