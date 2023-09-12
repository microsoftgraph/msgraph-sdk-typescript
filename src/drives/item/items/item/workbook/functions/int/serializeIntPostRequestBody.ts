import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type IntPostRequestBody } from './intPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIntPostRequestBody(writer: SerializationWriter, intPostRequestBody: IntPostRequestBody | undefined = {} as IntPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", intPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(intPostRequestBody.additionalData);
}
