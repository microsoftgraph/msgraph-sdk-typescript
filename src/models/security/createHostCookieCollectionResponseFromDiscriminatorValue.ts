import {deserializeIntoHostCookieCollectionResponse} from './deserializeIntoHostCookieCollectionResponse';
import {HostCookieCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHostCookieCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHostCookieCollectionResponse;
}
