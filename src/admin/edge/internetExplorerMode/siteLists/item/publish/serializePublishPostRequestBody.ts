import type {BrowserSharedCookie} from '../../../../../../models/browserSharedCookie';
import type {BrowserSite} from '../../../../../../models/browserSite';
import {serializeBrowserSharedCookie} from '../../../../../../models/serializeBrowserSharedCookie';
import {serializeBrowserSite} from '../../../../../../models/serializeBrowserSite';
import type {PublishPostRequestBody} from './publishPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePublishPostRequestBody(writer: SerializationWriter, publishPostRequestBody: PublishPostRequestBody | undefined = {} as PublishPostRequestBody) : void {
        writer.writeStringValue("revision", publishPostRequestBody.revision);
        writer.writeCollectionOfObjectValues<BrowserSharedCookie>("sharedCookies", publishPostRequestBody.sharedCookies, serializeBrowserSharedCookie);
        writer.writeCollectionOfObjectValues<BrowserSite>("sites", publishPostRequestBody.sites, serializeBrowserSite);
        writer.writeAdditionalData(publishPostRequestBody.additionalData);
}
