import {ItemReference} from '../../../../../models/itemReference';
import {serializeItemReference} from '../../../../../models/serializeItemReference';
import {CopyPostRequestBody} from './copyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCopyPostRequestBody(copyPostRequestBody: CopyPostRequestBody | undefined = {} as CopyPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("name", copyPostRequestBody.name);
        writer.writeObjectValue<ItemReference>("parentReference", copyPostRequestBody.parentReference, serializeItemReference);
        writer.writeAdditionalData(copyPostRequestBody.additionalData);
}
