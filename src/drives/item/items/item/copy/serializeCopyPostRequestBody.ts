import { type ItemReference } from '../../../../../models/itemReference';
import { serializeItemReference } from '../../../../../models/serializeItemReference';
import { type CopyPostRequestBody } from './copyPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCopyPostRequestBody(writer: SerializationWriter, copyPostRequestBody: CopyPostRequestBody | undefined = {} as CopyPostRequestBody) : void {
        writer.writeStringValue("name", copyPostRequestBody.name);
        writer.writeObjectValue<ItemReference>("parentReference", copyPostRequestBody.parentReference, serializeItemReference);
        writer.writeAdditionalData(copyPostRequestBody.additionalData);
}
