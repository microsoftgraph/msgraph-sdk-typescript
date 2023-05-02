import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ExactPostRequestBody} from './exactPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExactPostRequestBody(writer: SerializationWriter, exactPostRequestBody: ExactPostRequestBody | undefined = {} as ExactPostRequestBody) : void {
        writer.writeObjectValue<Json>("text1", exactPostRequestBody.text1, serializeJson);
        writer.writeObjectValue<Json>("text2", exactPostRequestBody.text2, serializeJson);
        writer.writeAdditionalData(exactPostRequestBody.additionalData);
}
