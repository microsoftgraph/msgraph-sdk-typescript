import {WorkbookFormatProtection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookFormatProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookFormatProtection {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookFormatProtection();
}
