import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface FolderView extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The method by which the folder should be sorted.
     */
    sortBy?: string | undefined;
    /**
     * If true, indicates that items should be sorted in descending order. Otherwise, items should be sorted ascending.
     */
    sortOrder?: string | undefined;
    /**
     * The type of view that should be used to represent the folder.
     */
    viewType?: string | undefined;
}
