import {SubscribeToToneOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubscribeToToneOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubscribeToToneOperationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubscribeToToneOperationCollectionResponse();
}
