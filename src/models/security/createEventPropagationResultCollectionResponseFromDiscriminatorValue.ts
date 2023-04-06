import {EventPropagationResultCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEventPropagationResultCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EventPropagationResultCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EventPropagationResultCollectionResponse();
}
