import {createDriveItemUploadablePropertiesFromDiscriminatorValue} from '../../../../../models/createDriveItemUploadablePropertiesFromDiscriminatorValue';
import {DriveItemUploadableProperties} from '../../../../../models/driveItemUploadableProperties';
import {serializeDriveItemUploadableProperties} from '../../../../../models/serializeDriveItemUploadableProperties';
import {CreateUploadSessionPostRequestBody} from './createUploadSessionPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCreateUploadSessionPostRequestBody(createUploadSessionPostRequestBody: CreateUploadSessionPostRequestBody | undefined = {} as CreateUploadSessionPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "item": n => { createUploadSessionPostRequestBody.item = n.getObjectValue<DriveItemUploadableProperties>(createDriveItemUploadablePropertiesFromDiscriminatorValue); },
    }
}
