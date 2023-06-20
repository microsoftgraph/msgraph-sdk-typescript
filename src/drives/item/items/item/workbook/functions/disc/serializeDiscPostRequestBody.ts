import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DiscPostRequestBody} from './discPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDiscPostRequestBody(discPostRequestBody: DiscPostRequestBody | undefined = {} as DiscPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("basis", discPostRequestBody.basis, serializeJson);
        writer.writeObjectValue<Json>("maturity", discPostRequestBody.maturity, serializeJson);
        writer.writeObjectValue<Json>("pr", discPostRequestBody.pr, serializeJson);
        writer.writeObjectValue<Json>("redemption", discPostRequestBody.redemption, serializeJson);
        writer.writeObjectValue<Json>("settlement", discPostRequestBody.settlement, serializeJson);
        writer.writeAdditionalData(discPostRequestBody.additionalData);
}
