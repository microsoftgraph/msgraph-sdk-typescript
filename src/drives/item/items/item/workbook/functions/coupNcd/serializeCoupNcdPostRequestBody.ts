import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CoupNcdPostRequestBody} from './coupNcdPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCoupNcdPostRequestBody(coupNcdPostRequestBody: CoupNcdPostRequestBody | undefined = {} as CoupNcdPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("basis", coupNcdPostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("frequency", coupNcdPostRequestBody.frequency, serializeJson);
        writer.writeObjectValue<Json>("maturity", coupNcdPostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("settlement", coupNcdPostRequestBody.settlement, serializeJson);
        writer.writeAdditionalData(coupNcdPostRequestBody.additionalData);
}
