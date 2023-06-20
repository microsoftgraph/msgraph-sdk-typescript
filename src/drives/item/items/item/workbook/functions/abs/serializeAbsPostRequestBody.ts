import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AbsPostRequestBody} from './absPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAbsPostRequestBody(absPostRequestBody: AbsPostRequestBody | undefined = {} as AbsPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", absPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(absPostRequestBody.additionalData);
}
