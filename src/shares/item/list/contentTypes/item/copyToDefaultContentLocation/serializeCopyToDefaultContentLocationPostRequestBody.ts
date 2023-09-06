import { type ItemReference } from '../../../../../../models/itemReference';
import { serializeItemReference } from '../../../../../../models/serializeItemReference';
import { type CopyToDefaultContentLocationPostRequestBody } from './copyToDefaultContentLocationPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCopyToDefaultContentLocationPostRequestBody(writer: SerializationWriter, copyToDefaultContentLocationPostRequestBody: CopyToDefaultContentLocationPostRequestBody | undefined = {} as CopyToDefaultContentLocationPostRequestBody) : void {
        writer.writeStringValue("destinationFileName", copyToDefaultContentLocationPostRequestBody.destinationFileName);
        writer.writeObjectValue<ItemReference>("sourceFile", copyToDefaultContentLocationPostRequestBody.sourceFile, serializeItemReference);
        writer.writeAdditionalData(copyToDefaultContentLocationPostRequestBody.additionalData);
}
