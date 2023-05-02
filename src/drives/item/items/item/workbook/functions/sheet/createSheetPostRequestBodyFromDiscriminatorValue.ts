import {deserializeIntoSheetPostRequestBody} from './deserializeIntoSheetPostRequestBody';
import {SheetPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSheetPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSheetPostRequestBody;
}
