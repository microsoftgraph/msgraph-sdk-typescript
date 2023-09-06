import { deserializeIntoWorkbookSessionInfo } from './deserializeIntoWorkbookSessionInfo';
import { type WorkbookSessionInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookSessionInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookSessionInfo;
}
