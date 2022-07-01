import {FolderView} from './folderView';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Folder extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** Number of children contained immediately within this container. */
    childCount?: number | undefined;
    /** A collection of properties defining the recommended view for the folder. */
    view?: FolderView | undefined;
}
