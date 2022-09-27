import {WebsiteCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWebsiteCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WebsiteCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WebsiteCollectionResponse();
}
