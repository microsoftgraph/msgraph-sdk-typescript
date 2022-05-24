import {WipePostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWipePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : WipePostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WipePostRequestBodyImpl();
}
