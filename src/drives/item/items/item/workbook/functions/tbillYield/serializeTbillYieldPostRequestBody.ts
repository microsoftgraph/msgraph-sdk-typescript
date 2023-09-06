import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type TbillYieldPostRequestBody } from './tbillYieldPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTbillYieldPostRequestBody(writer: SerializationWriter, tbillYieldPostRequestBody: TbillYieldPostRequestBody | undefined = {} as TbillYieldPostRequestBody) : void {
        writer.writeObjectValue<Json>("maturity", tbillYieldPostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("pr", tbillYieldPostRequestBody.pr, serializeJson);
        writer.writeObjectValue<Json>("settlement", tbillYieldPostRequestBody.settlement, serializeJson);
        writer.writeAdditionalData(tbillYieldPostRequestBody.additionalData);
}
