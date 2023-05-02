import {deserializeIntoExportPersonalDataPostRequestBody} from './deserializeIntoExportPersonalDataPostRequestBody';
import {ExportPersonalDataPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExportPersonalDataPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExportPersonalDataPostRequestBody;
}
