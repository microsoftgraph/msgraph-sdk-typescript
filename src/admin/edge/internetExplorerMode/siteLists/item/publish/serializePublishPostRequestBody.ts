import {BrowserSharedCookie} from '../../../../../../models/browserSharedCookie';
import {BrowserSite} from '../../../../../../models/browserSite';
import {serializeBrowserSharedCookie} from '../../../../../../models/serializeBrowserSharedCookie';
import {serializeBrowserSite} from '../../../../../../models/serializeBrowserSite';
import {PublishPostRequestBody} from './publishPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePublishPostRequestBody(writer: SerializationWriter, publishPostRequestBody: PublishPostRequestBody | undefined = {} as PublishPostRequestBody) : void {
        writer.writeStringValue("revision", publishPostRequestBody.revision);
        writer.writeCollectionOfObjectValues<BrowserSharedCookie>("sharedCookies", publishPostRequestBody.sharedCookies, serializeBrowserSharedCookie);
        writer.writeCollectionOfObjectValues<BrowserSite>("sites", publishPostRequestBody.sites, serializeBrowserSite);
        writer.writeAdditionalData(publishPostRequestBody.additionalData);
}
