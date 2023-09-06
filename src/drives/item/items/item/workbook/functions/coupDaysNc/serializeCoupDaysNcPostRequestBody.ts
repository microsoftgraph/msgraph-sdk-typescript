import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type CoupDaysNcPostRequestBody } from './coupDaysNcPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCoupDaysNcPostRequestBody(writer: SerializationWriter, coupDaysNcPostRequestBody: CoupDaysNcPostRequestBody | undefined = {} as CoupDaysNcPostRequestBody) : void {
        writer.writeObjectValue<Json>("basis", coupDaysNcPostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("frequency", coupDaysNcPostRequestBody.frequency, serializeJson);
        writer.writeObjectValue<Json>("maturity", coupDaysNcPostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("settlement", coupDaysNcPostRequestBody.settlement, serializeJson);
        writer.writeAdditionalData(coupDaysNcPostRequestBody.additionalData);
}
