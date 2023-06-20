import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {IsFormulaPostRequestBody} from './isFormulaPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIsFormulaPostRequestBody(isFormulaPostRequestBody: IsFormulaPostRequestBody | undefined = {} as IsFormulaPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("reference", isFormulaPostRequestBody.reference, serializeJson);
        writer.writeAdditionalData(isFormulaPostRequestBody.additionalData);
}
