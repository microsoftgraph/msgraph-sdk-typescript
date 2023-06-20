import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CoupNumPostRequestBody} from './coupNumPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCoupNumPostRequestBody(coupNumPostRequestBody: CoupNumPostRequestBody | undefined = {} as CoupNumPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("basis", coupNumPostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("frequency", coupNumPostRequestBody.frequency, serializeJson);
        writer.writeObjectValue<Json>("maturity", coupNumPostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("settlement", coupNumPostRequestBody.settlement, serializeJson);
        writer.writeAdditionalData(coupNumPostRequestBody.additionalData);
}
