import {WebAppCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWebAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WebAppCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WebAppCollectionResponse();
}
