import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CoupDaysPostRequestBody} from './coupDaysPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCoupDaysPostRequestBody(coupDaysPostRequestBody: CoupDaysPostRequestBody | undefined = {} as CoupDaysPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("basis", coupDaysPostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("frequency", coupDaysPostRequestBody.frequency, serializeJson);
        writer.writeObjectValue<Json>("maturity", coupDaysPostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("settlement", coupDaysPostRequestBody.settlement, serializeJson);
        writer.writeAdditionalData(coupDaysPostRequestBody.additionalData);
}
