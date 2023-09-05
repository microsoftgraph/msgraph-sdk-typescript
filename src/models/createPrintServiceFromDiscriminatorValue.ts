import { deserializeIntoPrintService } from './deserializeIntoPrintService';
import { type PrintService } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrintServiceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintService;
}
