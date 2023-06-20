import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {BasePostRequestBody} from './basePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBasePostRequestBody(basePostRequestBody: BasePostRequestBody | undefined = {} as BasePostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("minLength", basePostRequestBody.minLength, serializeJson);
        writer.writeObjectValue<Json>("number", basePostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("radix", basePostRequestBody.radix, serializeJson);
        writer.writeAdditionalData(basePostRequestBody.additionalData);
}
