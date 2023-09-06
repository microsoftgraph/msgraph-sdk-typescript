import { deserializeIntoRichLongRunningOperationCollectionResponse } from './deserializeIntoRichLongRunningOperationCollectionResponse';
import { type RichLongRunningOperationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRichLongRunningOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRichLongRunningOperationCollectionResponse;
}
