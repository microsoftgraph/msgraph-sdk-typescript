import {PrinterLocationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrinterLocationFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrinterLocationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrinterLocationImpl();
}
