import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type LcmPostRequestBody } from './lcmPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeLcmPostRequestBody(writer: SerializationWriter, lcmPostRequestBody: LcmPostRequestBody | undefined = {} as LcmPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", lcmPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(lcmPostRequestBody.additionalData);
}
