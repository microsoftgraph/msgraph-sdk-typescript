import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {DollarFrPostRequestBody} from './dollarFrPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDollarFrPostRequestBody(writer: SerializationWriter, dollarFrPostRequestBody: DollarFrPostRequestBody | undefined = {} as DollarFrPostRequestBody) : void {
        writer.writeObjectValue<Json>("decimalDollar", dollarFrPostRequestBody.decimalDollar, serializeJson);
        writer.writeObjectValue<Json>("fraction", dollarFrPostRequestBody.fraction, serializeJson);
        writer.writeAdditionalData(dollarFrPostRequestBody.additionalData);
}
