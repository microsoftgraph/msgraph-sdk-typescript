import { deserializeIntoPrintOperationCollectionResponse } from './deserializeIntoPrintOperationCollectionResponse';
import { type PrintOperationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrintOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintOperationCollectionResponse;
}
