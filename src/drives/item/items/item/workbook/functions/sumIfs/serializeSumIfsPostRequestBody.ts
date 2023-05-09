import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {SumIfsPostRequestBody} from './sumIfsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSumIfsPostRequestBody(writer: SerializationWriter, sumIfsPostRequestBody: SumIfsPostRequestBody | undefined = {} as SumIfsPostRequestBody) : void {
        writer.writeObjectValue<Json>("sumRange", sumIfsPostRequestBody.sumRange, serializeJson);
        writer.writeObjectValue<Json>("values", sumIfsPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(sumIfsPostRequestBody.additionalData);
}
