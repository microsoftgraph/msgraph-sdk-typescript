import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {OddPostRequestBody} from './oddPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOddPostRequestBody(writer: SerializationWriter, oddPostRequestBody: OddPostRequestBody | undefined = {} as OddPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", oddPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(oddPostRequestBody.additionalData);
}
