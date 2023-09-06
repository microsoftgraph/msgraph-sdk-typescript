import { deserializeIntoWorkbookFilterCriteria } from './deserializeIntoWorkbookFilterCriteria';
import { type WorkbookFilterCriteria } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookFilterCriteriaFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookFilterCriteria;
}
