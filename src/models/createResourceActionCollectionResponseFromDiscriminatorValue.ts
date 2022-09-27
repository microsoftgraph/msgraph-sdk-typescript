import {ResourceActionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceActionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResourceActionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResourceActionCollectionResponse();
}
