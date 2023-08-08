import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ComplexPostRequestBody} from './complexPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeComplexPostRequestBody(writer: SerializationWriter, complexPostRequestBody: ComplexPostRequestBody | undefined = {} as ComplexPostRequestBody) : void {
        writer.writeObjectValue<Json>("iNum", complexPostRequestBody.iNum, serializeJson);
        writer.writeObjectValue<Json>("realNum", complexPostRequestBody.realNum, serializeJson);
        writer.writeObjectValue<Json>("suffix", complexPostRequestBody.suffix, serializeJson);
        writer.writeAdditionalData(complexPostRequestBody.additionalData);
}
