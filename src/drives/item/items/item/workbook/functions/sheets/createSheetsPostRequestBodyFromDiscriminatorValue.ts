import {deserializeIntoSheetsPostRequestBody} from './deserializeIntoSheetsPostRequestBody';
import {SheetsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSheetsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSheetsPostRequestBody;
}
