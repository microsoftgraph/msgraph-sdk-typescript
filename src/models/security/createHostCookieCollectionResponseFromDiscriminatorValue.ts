import { deserializeIntoHostCookieCollectionResponse } from './deserializeIntoHostCookieCollectionResponse';
import { type HostCookieCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createHostCookieCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHostCookieCollectionResponse;
}
