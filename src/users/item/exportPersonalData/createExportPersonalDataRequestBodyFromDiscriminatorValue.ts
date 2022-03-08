import {ExportPersonalDataRequestBody} from './exportPersonalDataRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExportPersonalDataRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExportPersonalDataRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExportPersonalDataRequestBody();
}
