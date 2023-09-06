import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type CountIfsPostRequestBody } from './countIfsPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCountIfsPostRequestBody(writer: SerializationWriter, countIfsPostRequestBody: CountIfsPostRequestBody | undefined = {} as CountIfsPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", countIfsPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(countIfsPostRequestBody.additionalData);
}
