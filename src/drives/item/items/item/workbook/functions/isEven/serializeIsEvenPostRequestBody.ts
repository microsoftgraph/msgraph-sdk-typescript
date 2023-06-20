import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {IsEvenPostRequestBody} from './isEvenPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIsEvenPostRequestBody(isEvenPostRequestBody: IsEvenPostRequestBody | undefined = {} as IsEvenPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", isEvenPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(isEvenPostRequestBody.additionalData);
}
