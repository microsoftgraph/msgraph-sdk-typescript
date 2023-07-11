import {deserializeIntoExportPostRequestBody} from './deserializeIntoExportPostRequestBody';
import {ExportPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExportPostRequestBody;
}
