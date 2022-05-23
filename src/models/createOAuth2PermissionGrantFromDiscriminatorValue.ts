import {OAuth2PermissionGrantImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOAuth2PermissionGrantFromDiscriminatorValue(parseNode: ParseNode | undefined) : OAuth2PermissionGrantImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OAuth2PermissionGrantImpl();
}
