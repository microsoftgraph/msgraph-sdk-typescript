import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {EvenPostRequestBody} from './evenPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEvenPostRequestBody(writer: SerializationWriter, evenPostRequestBody: EvenPostRequestBody | undefined = {} as EvenPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", evenPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(evenPostRequestBody.additionalData);
}
