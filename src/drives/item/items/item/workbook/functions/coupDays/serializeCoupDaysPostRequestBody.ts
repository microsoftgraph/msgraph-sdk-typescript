import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type CoupDaysPostRequestBody } from './coupDaysPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCoupDaysPostRequestBody(writer: SerializationWriter, coupDaysPostRequestBody: CoupDaysPostRequestBody | undefined = {} as CoupDaysPostRequestBody) : void {
        writer.writeObjectValue<Json>("basis", coupDaysPostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("frequency", coupDaysPostRequestBody.frequency, serializeJson);
        writer.writeObjectValue<Json>("maturity", coupDaysPostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("settlement", coupDaysPostRequestBody.settlement, serializeJson);
        writer.writeAdditionalData(coupDaysPostRequestBody.additionalData);
}
