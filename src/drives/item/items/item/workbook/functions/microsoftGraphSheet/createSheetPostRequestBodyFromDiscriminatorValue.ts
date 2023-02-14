import {SheetPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSheetPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SheetPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SheetPostRequestBody();
}
