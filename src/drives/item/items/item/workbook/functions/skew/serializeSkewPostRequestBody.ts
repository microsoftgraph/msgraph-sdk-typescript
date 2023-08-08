import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {SkewPostRequestBody} from './skewPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSkewPostRequestBody(writer: SerializationWriter, skewPostRequestBody: SkewPostRequestBody | undefined = {} as SkewPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", skewPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(skewPostRequestBody.additionalData);
}
