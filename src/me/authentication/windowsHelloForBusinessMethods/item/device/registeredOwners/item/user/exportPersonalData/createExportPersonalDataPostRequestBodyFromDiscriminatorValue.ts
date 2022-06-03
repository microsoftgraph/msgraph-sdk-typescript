import {ExportPersonalDataPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExportPersonalDataPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExportPersonalDataPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExportPersonalDataPostRequestBodyImpl();
}
