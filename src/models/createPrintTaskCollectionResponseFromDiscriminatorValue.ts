import {PrintTaskCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintTaskCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintTaskCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintTaskCollectionResponseImpl();
}
