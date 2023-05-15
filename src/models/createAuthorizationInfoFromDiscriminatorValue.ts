import {deserializeIntoAuthorizationInfo} from './deserializeIntoAuthorizationInfo';
import {AuthorizationInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthorizationInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthorizationInfo;
}
