import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CountIfPostRequestBody} from './countIfPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCountIfPostRequestBody(writer: SerializationWriter, countIfPostRequestBody: CountIfPostRequestBody | undefined = {} as CountIfPostRequestBody) : void {
        writer.writeObjectValue<Json>("criteria", countIfPostRequestBody.criteria, serializeJson);
        writer.writeObjectValue<Json>("range", countIfPostRequestBody.range, serializeJson);
        writer.writeAdditionalData(countIfPostRequestBody.additionalData);
}
