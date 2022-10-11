import {PlayPromptOperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlayPromptOperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlayPromptOperationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlayPromptOperationCollectionResponse();
}
