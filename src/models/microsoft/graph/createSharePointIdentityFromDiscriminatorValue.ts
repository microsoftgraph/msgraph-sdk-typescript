import {SharePointIdentity} from './sharePointIdentity';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharePointIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharePointIdentity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharePointIdentity();
}
