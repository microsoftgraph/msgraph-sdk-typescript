import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type IsEvenPostRequestBody } from './isEvenPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIsEvenPostRequestBody(writer: SerializationWriter, isEvenPostRequestBody: IsEvenPostRequestBody | undefined = {} as IsEvenPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", isEvenPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(isEvenPostRequestBody.additionalData);
}
