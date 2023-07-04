import {ContentTypeInfo} from './contentTypeInfo';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DocumentSetContent extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Content type information of the file.
     */
    contentType?: ContentTypeInfo | undefined;
    /**
     * Name of the file in resource folder that should be added as a default content or a template in the document set.
     */
    fileName?: string | undefined;
    /**
     * Folder name in which the file will be placed when a new document set is created in the library.
     */
    folderName?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
