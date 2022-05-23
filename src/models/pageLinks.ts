import {ExternalLink} from './externalLink';

export interface PageLinks{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Opens the page in the OneNote native client if it's installed. */
    oneNoteClientUrl?:ExternalLink | undefined;
    /** Opens the page in OneNote on the web. */
    oneNoteWebUrl?:ExternalLink | undefined;
}
