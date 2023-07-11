import {BrowserSharedCookieSourceEnvironment} from './browserSharedCookieSourceEnvironment';
import {IdentitySet} from './identitySet';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface BrowserSharedCookieHistory extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The comment for the shared cookie.
     */
    comment?: string | undefined;
    /**
     * The name of the cookie.
     */
    displayName?: string | undefined;
    /**
     * Controls whether a cookie is a host-only or domain cookie.
     */
    hostOnly?: boolean | undefined;
    /**
     * The URL of the cookie.
     */
    hostOrDomain?: string | undefined;
    /**
     * The lastModifiedBy property
     */
    lastModifiedBy?: IdentitySet | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The path of the cookie.
     */
    path?: string | undefined;
    /**
     * The date and time when the cookie was last published.
     */
    publishedDateTime?: Date | undefined;
    /**
     * Specifies how the cookies are shared between Microsoft Edge and Internet Explorer. The possible values are: microsoftEdge, internetExplorer11, both, unknownFutureValue.
     */
    sourceEnvironment?: BrowserSharedCookieSourceEnvironment | undefined;
}
