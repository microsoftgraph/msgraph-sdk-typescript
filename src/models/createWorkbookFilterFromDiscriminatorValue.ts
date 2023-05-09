import {deserializeIntoWorkbookFilter} from './deserializeIntoWorkbookFilter';
import {WorkbookFilter} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookFilterFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookFilter;
}
