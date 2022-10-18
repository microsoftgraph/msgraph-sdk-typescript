import {ResourceAccessCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceAccessCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResourceAccessCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResourceAccessCollectionResponse();
}
