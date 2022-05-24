import {ExternalLink} from './externalLink';

export interface NotebookLinks{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Opens the notebook in the OneNote native client if it's installed. */
    oneNoteClientUrl?:ExternalLink | undefined;
    /** Opens the notebook in OneNote on the web. */
    oneNoteWebUrl?:ExternalLink | undefined;
}
