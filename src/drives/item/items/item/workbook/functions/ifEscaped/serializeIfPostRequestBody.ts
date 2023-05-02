import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {IfPostRequestBody} from './ifPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIfPostRequestBody(writer: SerializationWriter, ifPostRequestBody: IfPostRequestBody | undefined = {} as IfPostRequestBody) : void {
        writer.writeObjectValue<Json>("logicalTest", ifPostRequestBody.logicalTest, serializeJson);
        writer.writeObjectValue<Json>("valueIfFalse", ifPostRequestBody.valueIfFalse, serializeJson);
        writer.writeObjectValue<Json>("valueIfTrue", ifPostRequestBody.valueIfTrue, serializeJson);
        writer.writeAdditionalData(ifPostRequestBody.additionalData);
}
