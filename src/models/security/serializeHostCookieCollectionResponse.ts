import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {HostCookie} from './hostCookie';
import {HostCookieCollectionResponse} from './hostCookieCollectionResponse';
import {serializeHostCookie} from './serializeHostCookie';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHostCookieCollectionResponse(writer: SerializationWriter, hostCookieCollectionResponse: HostCookieCollectionResponse | undefined = {} as HostCookieCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, hostCookieCollectionResponse)
        writer.writeCollectionOfObjectValues<HostCookie>("value", hostCookieCollectionResponse.value, serializeHostCookie);
}
