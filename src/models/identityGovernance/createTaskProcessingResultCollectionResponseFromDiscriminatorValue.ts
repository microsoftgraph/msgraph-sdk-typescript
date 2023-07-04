import {deserializeIntoTaskProcessingResultCollectionResponse} from './deserializeIntoTaskProcessingResultCollectionResponse';
import {TaskProcessingResultCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTaskProcessingResultCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTaskProcessingResultCollectionResponse;
}
