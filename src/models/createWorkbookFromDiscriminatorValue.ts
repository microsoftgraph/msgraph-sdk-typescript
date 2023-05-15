import {deserializeIntoWorkbook} from './deserializeIntoWorkbook';
import {Workbook} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbook;
}
