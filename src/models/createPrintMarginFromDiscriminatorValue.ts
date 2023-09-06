import { deserializeIntoPrintMargin } from './deserializeIntoPrintMargin';
import { type PrintMargin } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrintMarginFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintMargin;
}
