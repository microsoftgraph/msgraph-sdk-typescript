import {ImCotPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImCotPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImCotPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImCotPostRequestBody();
}
