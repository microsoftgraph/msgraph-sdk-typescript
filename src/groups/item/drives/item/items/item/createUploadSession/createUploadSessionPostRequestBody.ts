import {DriveItemUploadableProperties} from '../../../../../../../models/driveItemUploadableProperties';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CreateUploadSessionPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** The item property */
    item?: DriveItemUploadableProperties | undefined;
}
