import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {MdurationPostRequestBody} from './mdurationPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMdurationPostRequestBody(writer: SerializationWriter, mdurationPostRequestBody: MdurationPostRequestBody | undefined = {} as MdurationPostRequestBody) : void {
        writer.writeObjectValue<Json>("basis", mdurationPostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("coupon", mdurationPostRequestBody.coupon, serializeJson);
        writer.writeObjectValue<Json>("frequency", mdurationPostRequestBody.frequency, serializeJson);
        writer.writeObjectValue<Json>("maturity", mdurationPostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("settlement", mdurationPostRequestBody.settlement, serializeJson);
        writer.writeObjectValue<Json>("yld", mdurationPostRequestBody.yld, serializeJson);
        writer.writeAdditionalData(mdurationPostRequestBody.additionalData);
}
