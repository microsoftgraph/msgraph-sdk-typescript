import {DriveItemUploadableProperties} from '../../../models/driveItemUploadableProperties';

export interface CreateUploadSessionPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The item property */
    item?:DriveItemUploadableProperties | undefined;
}
