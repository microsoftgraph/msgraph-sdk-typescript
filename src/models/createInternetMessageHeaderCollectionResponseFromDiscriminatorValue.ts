import {InternetMessageHeaderCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInternetMessageHeaderCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : InternetMessageHeaderCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InternetMessageHeaderCollectionResponse();
}
