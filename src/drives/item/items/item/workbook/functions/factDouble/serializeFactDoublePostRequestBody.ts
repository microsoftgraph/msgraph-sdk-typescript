import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type FactDoublePostRequestBody } from './factDoublePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFactDoublePostRequestBody(writer: SerializationWriter, factDoublePostRequestBody: FactDoublePostRequestBody | undefined = {} as FactDoublePostRequestBody) : void {
        writer.writeObjectValue<Json>("number", factDoublePostRequestBody.number, serializeJson);
        writer.writeAdditionalData(factDoublePostRequestBody.additionalData);
}
