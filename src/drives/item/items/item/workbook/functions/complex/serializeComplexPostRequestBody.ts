import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type ComplexPostRequestBody } from './complexPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeComplexPostRequestBody(writer: SerializationWriter, complexPostRequestBody: ComplexPostRequestBody | undefined = {} as ComplexPostRequestBody) : void {
        writer.writeObjectValue<Json>("iNum", complexPostRequestBody.iNum, serializeJson);
        writer.writeObjectValue<Json>("realNum", complexPostRequestBody.realNum, serializeJson);
        writer.writeObjectValue<Json>("suffix", complexPostRequestBody.suffix, serializeJson);
        writer.writeAdditionalData(complexPostRequestBody.additionalData);
}
