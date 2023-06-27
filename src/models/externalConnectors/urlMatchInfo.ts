import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UrlMatchInfo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * A list of the URL prefixes that must match URLs to be processed by this URL-to-item-resolver.
     */
    baseUrls?: string[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * A regular expression that will be matched towards the URL that is processed by this URL-to-item-resolver. The ECMAScript specification for regular expressions (ECMA-262) is used for the evaluation. The named groups defined by the regular expression will be used later to extract values from the URL.
     */
    urlPattern?: string | undefined;
}
