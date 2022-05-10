import {ExportPersonalDataRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExportPersonalDataRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExportPersonalDataRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExportPersonalDataRequestBodyImpl();
}
