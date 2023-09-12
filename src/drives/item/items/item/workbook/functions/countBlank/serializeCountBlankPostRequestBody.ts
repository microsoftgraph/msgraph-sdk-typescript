import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type CountBlankPostRequestBody } from './countBlankPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCountBlankPostRequestBody(writer: SerializationWriter, countBlankPostRequestBody: CountBlankPostRequestBody | undefined = {} as CountBlankPostRequestBody) : void {
        writer.writeObjectValue<Json>("range", countBlankPostRequestBody.range, serializeJson);
        writer.writeAdditionalData(countBlankPostRequestBody.additionalData);
}
