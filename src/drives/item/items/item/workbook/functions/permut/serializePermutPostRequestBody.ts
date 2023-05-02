import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {PermutPostRequestBody} from './permutPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePermutPostRequestBody(writer: SerializationWriter, permutPostRequestBody: PermutPostRequestBody | undefined = {} as PermutPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", permutPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("numberChosen", permutPostRequestBody.numberChosen, serializeJson);
        writer.writeAdditionalData(permutPostRequestBody.additionalData);
}
