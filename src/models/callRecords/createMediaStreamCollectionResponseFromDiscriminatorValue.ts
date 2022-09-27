import {MediaStreamCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaStreamCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaStreamCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaStreamCollectionResponse();
}
