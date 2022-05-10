import {SharePointIdentityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharePointIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharePointIdentityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharePointIdentityImpl();
}
