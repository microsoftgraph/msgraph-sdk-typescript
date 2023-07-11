import {deserializeIntoHostCookie} from './deserializeIntoHostCookie';
import {HostCookie} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHostCookieFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHostCookie;
}
