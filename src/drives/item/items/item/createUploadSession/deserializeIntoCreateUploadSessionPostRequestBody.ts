import { createDriveItemUploadablePropertiesFromDiscriminatorValue } from '../../../../../models/createDriveItemUploadablePropertiesFromDiscriminatorValue';
import { type DriveItemUploadableProperties } from '../../../../../models/driveItemUploadableProperties';
import { serializeDriveItemUploadableProperties } from '../../../../../models/serializeDriveItemUploadableProperties';
import { type CreateUploadSessionPostRequestBody } from './createUploadSessionPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCreateUploadSessionPostRequestBody(createUploadSessionPostRequestBody: CreateUploadSessionPostRequestBody | undefined = {} as CreateUploadSessionPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "item": n => { createUploadSessionPostRequestBody.item = n.getObjectValue<DriveItemUploadableProperties>(createDriveItemUploadablePropertiesFromDiscriminatorValue); },
    }
}
