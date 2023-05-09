import {deserializeIntoWorkbookSessionInfo} from './deserializeIntoWorkbookSessionInfo';
import {WorkbookSessionInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookSessionInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookSessionInfo;
}
