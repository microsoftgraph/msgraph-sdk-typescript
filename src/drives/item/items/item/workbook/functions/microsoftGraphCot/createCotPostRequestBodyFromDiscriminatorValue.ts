import {CotPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCotPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CotPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CotPostRequestBody();
}
