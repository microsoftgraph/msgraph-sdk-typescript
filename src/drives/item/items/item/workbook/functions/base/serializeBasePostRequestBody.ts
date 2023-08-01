import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {BasePostRequestBody} from './basePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBasePostRequestBody(writer: SerializationWriter, basePostRequestBody: BasePostRequestBody | undefined = {} as BasePostRequestBody) : void {
        writer.writeObjectValue<Json>("minLength", basePostRequestBody.minLength, serializeJson);
        writer.writeObjectValue<Json>("number", basePostRequestBody.number, serializeJson);
        writer.writeObjectValue<Json>("radix", basePostRequestBody.radix, serializeJson);
        writer.writeAdditionalData(basePostRequestBody.additionalData);
}
