import {WipeRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWipeRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : WipeRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WipeRequestBodyImpl();
}
