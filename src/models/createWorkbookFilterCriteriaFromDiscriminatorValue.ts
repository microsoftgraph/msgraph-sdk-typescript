import {deserializeIntoWorkbookFilterCriteria} from './deserializeIntoWorkbookFilterCriteria';
import {WorkbookFilterCriteria} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookFilterCriteriaFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookFilterCriteria;
}
