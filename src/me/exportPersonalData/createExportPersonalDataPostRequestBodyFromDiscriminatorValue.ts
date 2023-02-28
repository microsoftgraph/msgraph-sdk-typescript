import {ExportPersonalDataPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExportPersonalDataPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExportPersonalDataPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExportPersonalDataPostRequestBody();
}
