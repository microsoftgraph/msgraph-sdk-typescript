import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {BitlshiftPostRequestBody} from './bitlshiftPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBitlshiftPostRequestBody(bitlshiftPostRequestBody: BitlshiftPostRequestBody | undefined = {} as BitlshiftPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", bitlshiftPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("shiftAmount", bitlshiftPostRequestBody.shiftAmount, serializeJson);
        writer.writeAdditionalData(bitlshiftPostRequestBody.additionalData);
}
