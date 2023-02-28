import {BitorPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBitorPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : BitorPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BitorPostRequestBody();
}
