import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {BitlshiftPostRequestBody} from './bitlshiftPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBitlshiftPostRequestBody(writer: SerializationWriter, bitlshiftPostRequestBody: BitlshiftPostRequestBody | undefined = {} as BitlshiftPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", bitlshiftPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("shiftAmount", bitlshiftPostRequestBody.shiftAmount, serializeJson);
        writer.writeAdditionalData(bitlshiftPostRequestBody.additionalData);
}
