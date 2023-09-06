import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type IsFormulaPostRequestBody } from './isFormulaPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIsFormulaPostRequestBody(writer: SerializationWriter, isFormulaPostRequestBody: IsFormulaPostRequestBody | undefined = {} as IsFormulaPostRequestBody) : void {
        writer.writeObjectValue<Json>("reference", isFormulaPostRequestBody.reference, serializeJson);
        writer.writeAdditionalData(isFormulaPostRequestBody.additionalData);
}
