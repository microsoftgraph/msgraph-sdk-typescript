import { deserializeIntoSheetPostRequestBody } from './deserializeIntoSheetPostRequestBody';
import { type SheetPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSheetPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSheetPostRequestBody;
}
