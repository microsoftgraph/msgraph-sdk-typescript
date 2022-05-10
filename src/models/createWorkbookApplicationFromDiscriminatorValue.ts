import {WorkbookApplicationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookApplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookApplicationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookApplicationImpl();
}
