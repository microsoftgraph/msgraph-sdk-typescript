import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {SumSqPostRequestBody} from './sumSqPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSumSqPostRequestBody(writer: SerializationWriter, sumSqPostRequestBody: SumSqPostRequestBody | undefined = {} as SumSqPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", sumSqPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(sumSqPostRequestBody.additionalData);
}
