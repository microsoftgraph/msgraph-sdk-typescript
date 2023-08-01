import type {ItemReference} from '../../../../../models/itemReference';
import {serializeItemReference} from '../../../../../models/serializeItemReference';
import type {CopyPostRequestBody} from './copyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCopyPostRequestBody(writer: SerializationWriter, copyPostRequestBody: CopyPostRequestBody | undefined = {} as CopyPostRequestBody) : void {
        writer.writeStringValue("name", copyPostRequestBody.name);
        writer.writeObjectValue<ItemReference>("parentReference", copyPostRequestBody.parentReference, serializeItemReference);
        writer.writeAdditionalData(copyPostRequestBody.additionalData);
}
