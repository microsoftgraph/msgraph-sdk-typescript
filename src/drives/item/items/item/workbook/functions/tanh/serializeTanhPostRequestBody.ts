import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {TanhPostRequestBody} from './tanhPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTanhPostRequestBody(writer: SerializationWriter, tanhPostRequestBody: TanhPostRequestBody | undefined = {} as TanhPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", tanhPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(tanhPostRequestBody.additionalData);
}
