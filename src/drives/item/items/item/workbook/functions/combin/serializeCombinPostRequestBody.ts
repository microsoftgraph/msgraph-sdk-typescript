import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CombinPostRequestBody} from './combinPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCombinPostRequestBody(combinPostRequestBody: CombinPostRequestBody | undefined = {} as CombinPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", combinPostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("numberChosen", combinPostRequestBody.numberChosen, serializeJson);
        writer.writeAdditionalData(combinPostRequestBody.additionalData);
}
