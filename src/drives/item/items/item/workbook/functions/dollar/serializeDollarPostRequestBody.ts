import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DollarPostRequestBody} from './dollarPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDollarPostRequestBody(writer: SerializationWriter, dollarPostRequestBody: DollarPostRequestBody | undefined = {} as DollarPostRequestBody) : void {
        writer.writeObjectValue<Json>("decimals", dollarPostRequestBody.decimals, serializeJson);
        writer.writeObjectValue<Json>("number", dollarPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(dollarPostRequestBody.additionalData);
}
