import type {DriveItemUploadableProperties} from '../../../../../models/driveItemUploadableProperties';
import {serializeDriveItemUploadableProperties} from '../../../../../models/serializeDriveItemUploadableProperties';
import type {CreateUploadSessionPostRequestBody} from './createUploadSessionPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCreateUploadSessionPostRequestBody(writer: SerializationWriter, createUploadSessionPostRequestBody: CreateUploadSessionPostRequestBody | undefined = {} as CreateUploadSessionPostRequestBody) : void {
        writer.writeObjectValue<DriveItemUploadableProperties>("item", createUploadSessionPostRequestBody.item, serializeDriveItemUploadableProperties);
        writer.writeAdditionalData(createUploadSessionPostRequestBody.additionalData);
}
