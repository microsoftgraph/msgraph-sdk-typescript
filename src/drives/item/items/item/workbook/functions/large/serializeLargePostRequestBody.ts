import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {LargePostRequestBody} from './largePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLargePostRequestBody(largePostRequestBody: LargePostRequestBody | undefined = {} as LargePostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("array", largePostRequestBody.array, serializeJson);
        writer.writeObjectValue<Json>("k", largePostRequestBody.k, serializeJson);
        writer.writeAdditionalData(largePostRequestBody.additionalData);
}
