import {deserializeIntoWorkbookIcon} from './deserializeIntoWorkbookIcon';
import {WorkbookIcon} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookIconFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookIcon;
}
