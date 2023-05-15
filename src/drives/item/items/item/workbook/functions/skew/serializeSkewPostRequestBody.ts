import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {SkewPostRequestBody} from './skewPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSkewPostRequestBody(writer: SerializationWriter, skewPostRequestBody: SkewPostRequestBody | undefined = {} as SkewPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", skewPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(skewPostRequestBody.additionalData);
}
