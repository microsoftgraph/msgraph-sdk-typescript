import type {BrowserSharedCookie} from '../../../../../../models/browserSharedCookie';
import type {BrowserSite} from '../../../../../../models/browserSite';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PublishPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The revision property
     */
    revision?: string | undefined;
    /**
     * The sharedCookies property
     */
    sharedCookies?: BrowserSharedCookie[] | undefined;
    /**
     * The sites property
     */
    sites?: BrowserSite[] | undefined;
}
