import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {TbillEqPostRequestBody} from './tbillEqPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTbillEqPostRequestBody(writer: SerializationWriter, tbillEqPostRequestBody: TbillEqPostRequestBody | undefined = {} as TbillEqPostRequestBody) : void {
        writer.writeObjectValue<Json>("discount", tbillEqPostRequestBody.discount, serializeJson);
        writer.writeObjectValue<Json>("maturity", tbillEqPostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("settlement", tbillEqPostRequestBody.settlement, serializeJson);
        writer.writeAdditionalData(tbillEqPostRequestBody.additionalData);
}
