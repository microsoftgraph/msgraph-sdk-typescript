import {PrintServiceCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintServiceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintServiceCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintServiceCollectionResponseImpl();
}
