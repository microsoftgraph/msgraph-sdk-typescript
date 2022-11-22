import {MediaCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaCollectionResponse();
}
