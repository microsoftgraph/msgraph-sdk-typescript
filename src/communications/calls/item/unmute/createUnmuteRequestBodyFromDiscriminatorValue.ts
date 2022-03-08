import {UnmuteRequestBody} from './unmuteRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnmuteRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnmuteRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnmuteRequestBody();
}
