import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CoupDaysNcPostRequestBody} from './coupDaysNcPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCoupDaysNcPostRequestBody(writer: SerializationWriter, coupDaysNcPostRequestBody: CoupDaysNcPostRequestBody | undefined = {} as CoupDaysNcPostRequestBody) : void {
        writer.writeObjectValue<Json>("basis", coupDaysNcPostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("frequency", coupDaysNcPostRequestBody.frequency, serializeJson);
        writer.writeObjectValue<Json>("maturity", coupDaysNcPostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("settlement", coupDaysNcPostRequestBody.settlement, serializeJson);
        writer.writeAdditionalData(coupDaysNcPostRequestBody.additionalData);
}
