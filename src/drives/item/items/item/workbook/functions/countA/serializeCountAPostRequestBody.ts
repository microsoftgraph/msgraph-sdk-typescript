import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CountAPostRequestBody} from './countAPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCountAPostRequestBody(writer: SerializationWriter, countAPostRequestBody: CountAPostRequestBody | undefined = {} as CountAPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", countAPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(countAPostRequestBody.additionalData);
}
