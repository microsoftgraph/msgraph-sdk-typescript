import {UnmutePostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnmutePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnmutePostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnmutePostRequestBodyImpl();
}
