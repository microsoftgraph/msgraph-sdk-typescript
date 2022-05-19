import {UnmutePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnmutePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnmutePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnmutePostRequestBody();
}
