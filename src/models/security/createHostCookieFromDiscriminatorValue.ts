import { deserializeIntoHostCookie } from './deserializeIntoHostCookie';
import { type HostCookie } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createHostCookieFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHostCookie;
}
