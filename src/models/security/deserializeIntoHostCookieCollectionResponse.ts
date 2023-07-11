import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createHostCookieFromDiscriminatorValue} from './createHostCookieFromDiscriminatorValue';
import {HostCookie} from './hostCookie';
import {HostCookieCollectionResponse} from './hostCookieCollectionResponse';
import {serializeHostCookie} from './serializeHostCookie';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHostCookieCollectionResponse(hostCookieCollectionResponse: HostCookieCollectionResponse | undefined = {} as HostCookieCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(hostCookieCollectionResponse),
        "value": n => { hostCookieCollectionResponse.value = n.getCollectionOfObjectValues<HostCookie>(createHostCookieFromDiscriminatorValue); },
    }
}
