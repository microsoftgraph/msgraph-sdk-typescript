import { deserializeIntoTaskProcessingResultCollectionResponse } from './deserializeIntoTaskProcessingResultCollectionResponse';
import { type TaskProcessingResultCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTaskProcessingResultCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTaskProcessingResultCollectionResponse;
}
