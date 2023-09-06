import { deserializeIntoSheetsPostRequestBody } from './deserializeIntoSheetsPostRequestBody';
import { type SheetsPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSheetsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSheetsPostRequestBody;
}
