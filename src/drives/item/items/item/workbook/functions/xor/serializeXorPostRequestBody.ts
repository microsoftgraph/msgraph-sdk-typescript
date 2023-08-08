import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {XorPostRequestBody} from './xorPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeXorPostRequestBody(writer: SerializationWriter, xorPostRequestBody: XorPostRequestBody | undefined = {} as XorPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", xorPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(xorPostRequestBody.additionalData);
}
