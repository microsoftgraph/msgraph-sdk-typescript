import { deserializeIntoExportPostRequestBody } from './deserializeIntoExportPostRequestBody';
import { type ExportPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createExportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExportPostRequestBody;
}
