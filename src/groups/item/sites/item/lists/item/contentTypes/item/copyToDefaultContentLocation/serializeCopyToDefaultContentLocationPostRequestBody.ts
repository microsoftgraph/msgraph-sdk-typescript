import {ItemReference} from '../../../../../../../../../models/itemReference';
import {serializeItemReference} from '../../../../../../../../../models/serializeItemReference';
import {CopyToDefaultContentLocationPostRequestBody} from './copyToDefaultContentLocationPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCopyToDefaultContentLocationPostRequestBody(copyToDefaultContentLocationPostRequestBody: CopyToDefaultContentLocationPostRequestBody | undefined = {} as CopyToDefaultContentLocationPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("destinationFileName", copyToDefaultContentLocationPostRequestBody.destinationFileName);
        writer.writeObjectValue<ItemReference>("sourceFile", copyToDefaultContentLocationPostRequestBody.sourceFile, serializeItemReference);
        writer.writeAdditionalData(copyToDefaultContentLocationPostRequestBody.additionalData);
}
