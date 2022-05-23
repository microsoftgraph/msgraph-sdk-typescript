import {PrintOperationCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintOperationCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintOperationCollectionResponseImpl();
}
