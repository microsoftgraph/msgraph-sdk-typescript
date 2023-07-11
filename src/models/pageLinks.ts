import {ExternalLink} from './externalLink';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PageLinks extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Opens the page in the OneNote native client if it's installed.
     */
    oneNoteClientUrl?: ExternalLink | undefined;
    /**
     * Opens the page in OneNote on the web.
     */
    oneNoteWebUrl?: ExternalLink | undefined;
}
