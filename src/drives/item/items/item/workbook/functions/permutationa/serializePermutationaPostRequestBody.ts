import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {PermutationaPostRequestBody} from './permutationaPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePermutationaPostRequestBody(writer: SerializationWriter, permutationaPostRequestBody: PermutationaPostRequestBody | undefined = {} as PermutationaPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", permutationaPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("numberChosen", permutationaPostRequestBody.numberChosen, serializeJson);
        writer.writeAdditionalData(permutationaPostRequestBody.additionalData);
}
