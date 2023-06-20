import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CoupDayBsPostRequestBody} from './coupDayBsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCoupDayBsPostRequestBody(coupDayBsPostRequestBody: CoupDayBsPostRequestBody | undefined = {} as CoupDayBsPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("basis", coupDayBsPostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("frequency", coupDayBsPostRequestBody.frequency, serializeJson);
        writer.writeObjectValue<Json>("maturity", coupDayBsPostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("settlement", coupDayBsPostRequestBody.settlement, serializeJson);
        writer.writeAdditionalData(coupDayBsPostRequestBody.additionalData);
}
