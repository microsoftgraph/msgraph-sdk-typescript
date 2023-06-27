import {Identity} from './identity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SharingLink extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The app the link is associated with.
     */
    application?: Identity | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * If true then the user can only use this link to view the item on the web, and cannot use it to download the contents of the item. Only for OneDrive for Business and SharePoint.
     */
    preventsDownload?: boolean | undefined;
    /**
     * The scope of the link represented by this permission. Value anonymous indicates the link is usable by anyone, organization indicates the link is only usable for users signed into the same tenant.
     */
    scope?: string | undefined;
    /**
     * The type of the link created.
     */
    type?: string | undefined;
    /**
     * For embed links, this property contains the HTML code for an <iframe> element that will embed the item in a webpage.
     */
    webHtml?: string | undefined;
    /**
     * A URL that opens the item in the browser on the OneDrive website.
     */
    webUrl?: string | undefined;
}
