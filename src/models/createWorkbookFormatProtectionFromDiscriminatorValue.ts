import {deserializeIntoWorkbookFormatProtection} from './deserializeIntoWorkbookFormatProtection';
import {WorkbookFormatProtection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookFormatProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookFormatProtection;
}
