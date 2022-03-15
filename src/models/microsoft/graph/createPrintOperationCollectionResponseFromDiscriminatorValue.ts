import {PrintOperationCollectionResponse} from './printOperationCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintOperationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintOperationCollectionResponse();
}
