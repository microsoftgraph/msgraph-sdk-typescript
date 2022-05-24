import {SharePostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharePostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharePostRequestBodyImpl();
}
