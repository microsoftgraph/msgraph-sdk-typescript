import {DriveItemUploadableProperties} from '../../../../../models/driveItemUploadableProperties';
import {serializeDriveItemUploadableProperties} from '../../../../../models/serializeDriveItemUploadableProperties';
import {CreateUploadSessionPostRequestBody} from './createUploadSessionPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCreateUploadSessionPostRequestBody(createUploadSessionPostRequestBody: CreateUploadSessionPostRequestBody | undefined = {} as CreateUploadSessionPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<DriveItemUploadableProperties>("item", createUploadSessionPostRequestBody.item, serializeDriveItemUploadableProperties);
        writer.writeAdditionalData(createUploadSessionPostRequestBody.additionalData);
}
