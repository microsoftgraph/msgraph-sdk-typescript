import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {AbsPostRequestBody} from './absPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAbsPostRequestBody(writer: SerializationWriter, absPostRequestBody: AbsPostRequestBody | undefined = {} as AbsPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", absPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(absPostRequestBody.additionalData);
}
