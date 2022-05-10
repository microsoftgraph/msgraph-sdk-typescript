import {WorkbookIconImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookIconFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookIconImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookIconImpl();
}
