import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {TPostRequestBody} from './tPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTPostRequestBody(writer: SerializationWriter, tPostRequestBody: TPostRequestBody | undefined = {} as TPostRequestBody) : void {
        writer.writeObjectValue<Json>("value", tPostRequestBody.value, serializeJson);
        writer.writeAdditionalData(tPostRequestBody.additionalData);
}
