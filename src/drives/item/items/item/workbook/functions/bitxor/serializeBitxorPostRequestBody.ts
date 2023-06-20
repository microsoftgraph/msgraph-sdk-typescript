import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {BitxorPostRequestBody} from './bitxorPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBitxorPostRequestBody(bitxorPostRequestBody: BitxorPostRequestBody | undefined = {} as BitxorPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number1", bitxorPostRequestBody.number1, serializeJson);
        writer.writeObjectValue<Json>("number2", bitxorPostRequestBody.number2, serializeJson);
        writer.writeAdditionalData(bitxorPostRequestBody.additionalData);
}
