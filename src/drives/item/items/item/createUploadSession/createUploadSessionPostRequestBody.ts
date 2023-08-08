import type {DriveItemUploadableProperties} from '../../../../../models/driveItemUploadableProperties';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CreateUploadSessionPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The item property
     */
    item?: DriveItemUploadableProperties | undefined;
}
