import {WorkbookWorksheetCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookWorksheetCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookWorksheetCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookWorksheetCollectionResponse();
}
