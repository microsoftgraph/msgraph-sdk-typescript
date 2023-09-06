import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type CoupNumPostRequestBody } from './coupNumPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCoupNumPostRequestBody(writer: SerializationWriter, coupNumPostRequestBody: CoupNumPostRequestBody | undefined = {} as CoupNumPostRequestBody) : void {
        writer.writeObjectValue<Json>("basis", coupNumPostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("frequency", coupNumPostRequestBody.frequency, serializeJson);
        writer.writeObjectValue<Json>("maturity", coupNumPostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("settlement", coupNumPostRequestBody.settlement, serializeJson);
        writer.writeAdditionalData(coupNumPostRequestBody.additionalData);
}
