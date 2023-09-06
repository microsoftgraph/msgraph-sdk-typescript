import { deserializeIntoWorkbook } from './deserializeIntoWorkbook';
import { type Workbook } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbook;
}
