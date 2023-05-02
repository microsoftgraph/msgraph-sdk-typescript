import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DurationPostRequestBody} from './durationPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDurationPostRequestBody(writer: SerializationWriter, durationPostRequestBody: DurationPostRequestBody | undefined = {} as DurationPostRequestBody) : void {
        writer.writeObjectValue<Json>("basis", durationPostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("coupon", durationPostRequestBody.coupon, serializeJson);
        writer.writeObjectValue<Json>("frequency", durationPostRequestBody.frequency, serializeJson);
        writer.writeObjectValue<Json>("maturity", durationPostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("settlement", durationPostRequestBody.settlement, serializeJson);
        writer.writeObjectValue<Json>("yld", durationPostRequestBody.yld, serializeJson);
        writer.writeAdditionalData(durationPostRequestBody.additionalData);
}
