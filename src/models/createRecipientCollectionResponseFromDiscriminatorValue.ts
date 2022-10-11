import {RecipientCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecipientCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RecipientCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RecipientCollectionResponse();
}
