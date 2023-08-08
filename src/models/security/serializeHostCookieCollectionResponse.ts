import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import type {HostCookie} from './hostCookie';
import type {HostCookieCollectionResponse} from './hostCookieCollectionResponse';
import {serializeHostCookie} from './serializeHostCookie';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHostCookieCollectionResponse(writer: SerializationWriter, hostCookieCollectionResponse: HostCookieCollectionResponse | undefined = {} as HostCookieCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, hostCookieCollectionResponse)
        writer.writeCollectionOfObjectValues<HostCookie>("value", hostCookieCollectionResponse.value, serializeHostCookie);
}
