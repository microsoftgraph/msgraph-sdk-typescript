import {ShareRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createShareRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ShareRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ShareRequestBodyImpl();
}
