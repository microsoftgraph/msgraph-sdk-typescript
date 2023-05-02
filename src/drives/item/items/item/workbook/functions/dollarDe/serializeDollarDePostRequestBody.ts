import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DollarDePostRequestBody} from './dollarDePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDollarDePostRequestBody(writer: SerializationWriter, dollarDePostRequestBody: DollarDePostRequestBody | undefined = {} as DollarDePostRequestBody) : void {
        writer.writeObjectValue<Json>("fraction", dollarDePostRequestBody.fraction, serializeJson);
        writer.writeObjectValue<Json>("fractionalDollar", dollarDePostRequestBody.fractionalDollar, serializeJson);
        writer.writeAdditionalData(dollarDePostRequestBody.additionalData);
}
