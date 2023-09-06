import { deserializeIntoExportPersonalDataPostRequestBody } from './deserializeIntoExportPersonalDataPostRequestBody';
import { type ExportPersonalDataPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createExportPersonalDataPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExportPersonalDataPostRequestBody;
}
