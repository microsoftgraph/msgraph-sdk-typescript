import {WorkbookFormatProtectionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookFormatProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookFormatProtectionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookFormatProtectionImpl();
}
