import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {CoupNcdPostRequestBody} from './coupNcdPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCoupNcdPostRequestBody(writer: SerializationWriter, coupNcdPostRequestBody: CoupNcdPostRequestBody | undefined = {} as CoupNcdPostRequestBody) : void {
        writer.writeObjectValue<Json>("basis", coupNcdPostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("frequency", coupNcdPostRequestBody.frequency, serializeJson);
        writer.writeObjectValue<Json>("maturity", coupNcdPostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("settlement", coupNcdPostRequestBody.settlement, serializeJson);
        writer.writeAdditionalData(coupNcdPostRequestBody.additionalData);
}
