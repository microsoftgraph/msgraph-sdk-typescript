import {PrintMarginImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintMarginFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintMarginImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintMarginImpl();
}
