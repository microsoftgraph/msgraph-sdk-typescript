import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {CoupDayBsPostRequestBody} from './coupDayBsPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCoupDayBsPostRequestBody(writer: SerializationWriter, coupDayBsPostRequestBody: CoupDayBsPostRequestBody | undefined = {} as CoupDayBsPostRequestBody) : void {
        writer.writeObjectValue<Json>("basis", coupDayBsPostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("frequency", coupDayBsPostRequestBody.frequency, serializeJson);
        writer.writeObjectValue<Json>("maturity", coupDayBsPostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("settlement", coupDayBsPostRequestBody.settlement, serializeJson);
        writer.writeAdditionalData(coupDayBsPostRequestBody.additionalData);
}
