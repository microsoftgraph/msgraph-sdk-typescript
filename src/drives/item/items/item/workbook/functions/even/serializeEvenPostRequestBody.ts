import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {EvenPostRequestBody} from './evenPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEvenPostRequestBody(evenPostRequestBody: EvenPostRequestBody | undefined = {} as EvenPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", evenPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(evenPostRequestBody.additionalData);
}
