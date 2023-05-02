import {deserializeIntoWorkbookWorksheetCollectionResponse} from './deserializeIntoWorkbookWorksheetCollectionResponse';
import {WorkbookWorksheetCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookWorksheetCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookWorksheetCollectionResponse;
}
