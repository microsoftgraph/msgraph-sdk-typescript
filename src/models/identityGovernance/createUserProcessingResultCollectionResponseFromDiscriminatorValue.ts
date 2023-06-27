import {deserializeIntoUserProcessingResultCollectionResponse} from './deserializeIntoUserProcessingResultCollectionResponse';
import {UserProcessingResultCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserProcessingResultCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserProcessingResultCollectionResponse;
}
