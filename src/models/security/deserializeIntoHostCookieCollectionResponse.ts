import { deserializeIntoBaseCollectionPaginationCountResponse } from '../deserializeIntoBaseCollectionPaginationCountResponse';
import { createHostCookieFromDiscriminatorValue } from './createHostCookieFromDiscriminatorValue';
import { type HostCookie } from './hostCookie';
import { type HostCookieCollectionResponse } from './hostCookieCollectionResponse';
import { serializeHostCookie } from './serializeHostCookie';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoHostCookieCollectionResponse(hostCookieCollectionResponse: HostCookieCollectionResponse | undefined = {} as HostCookieCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(hostCookieCollectionResponse),
        "value": n => { hostCookieCollectionResponse.value = n.getCollectionOfObjectValues<HostCookie>(createHostCookieFromDiscriminatorValue); },
    }
}
