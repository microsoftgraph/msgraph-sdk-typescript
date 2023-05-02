import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CombinaPostRequestBody} from './combinaPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCombinaPostRequestBody(writer: SerializationWriter, combinaPostRequestBody: CombinaPostRequestBody | undefined = {} as CombinaPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", combinaPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("numberChosen", combinaPostRequestBody.numberChosen, serializeJson);
        writer.writeAdditionalData(combinaPostRequestBody.additionalData);
}
