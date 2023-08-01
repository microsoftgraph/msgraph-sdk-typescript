import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {RoundDownPostRequestBody} from './roundDownPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRoundDownPostRequestBody(writer: SerializationWriter, roundDownPostRequestBody: RoundDownPostRequestBody | undefined = {} as RoundDownPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", roundDownPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("numDigits", roundDownPostRequestBody.numDigits, serializeJson);
        writer.writeAdditionalData(roundDownPostRequestBody.additionalData);
}
