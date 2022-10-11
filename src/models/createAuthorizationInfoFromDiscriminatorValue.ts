import {AuthorizationInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthorizationInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthorizationInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthorizationInfo();
}
