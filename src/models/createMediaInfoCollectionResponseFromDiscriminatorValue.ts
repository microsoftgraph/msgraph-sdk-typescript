import {MediaInfoCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaInfoCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaInfoCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaInfoCollectionResponse();
}
