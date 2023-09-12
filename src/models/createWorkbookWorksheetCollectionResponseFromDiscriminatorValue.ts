import { deserializeIntoWorkbookWorksheetCollectionResponse } from './deserializeIntoWorkbookWorksheetCollectionResponse';
import { type WorkbookWorksheetCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookWorksheetCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookWorksheetCollectionResponse;
}
