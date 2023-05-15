import {deserializeIntoPrintMargin} from './deserializeIntoPrintMargin';
import {PrintMargin} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintMarginFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintMargin;
}
