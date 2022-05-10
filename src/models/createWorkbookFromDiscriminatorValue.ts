import {WorkbookImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookImpl();
}
