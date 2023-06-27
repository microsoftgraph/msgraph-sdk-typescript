import {FolderView} from './folderView';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Folder extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Number of children contained immediately within this container.
     */
    childCount?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * A collection of properties defining the recommended view for the folder.
     */
    view?: FolderView | undefined;
}
