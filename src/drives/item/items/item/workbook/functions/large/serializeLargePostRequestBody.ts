import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {LargePostRequestBody} from './largePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLargePostRequestBody(writer: SerializationWriter, largePostRequestBody: LargePostRequestBody | undefined = {} as LargePostRequestBody) : void {
        writer.writeObjectValue<Json>("array", largePostRequestBody.array, serializeJson);
        writer.writeObjectValue<Json>("k", largePostRequestBody.k, serializeJson);
        writer.writeAdditionalData(largePostRequestBody.additionalData);
}
