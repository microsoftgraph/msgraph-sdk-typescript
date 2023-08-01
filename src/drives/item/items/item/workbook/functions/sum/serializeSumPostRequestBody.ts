import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {SumPostRequestBody} from './sumPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSumPostRequestBody(writer: SerializationWriter, sumPostRequestBody: SumPostRequestBody | undefined = {} as SumPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", sumPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(sumPostRequestBody.additionalData);
}
