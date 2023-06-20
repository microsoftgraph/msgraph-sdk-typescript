import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ChoosePostRequestBody} from './choosePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChoosePostRequestBody(choosePostRequestBody: ChoosePostRequestBody | undefined = {} as ChoosePostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("indexNum", choosePostRequestBody.indexNum, serializeJson);
        writer.writeObjectValue<Json>("values", choosePostRequestBody.values, serializeJson);
        writer.writeAdditionalData(choosePostRequestBody.additionalData);
}
