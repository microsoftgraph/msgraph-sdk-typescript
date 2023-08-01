import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {CosPostRequestBody} from './cosPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCosPostRequestBody(writer: SerializationWriter, cosPostRequestBody: CosPostRequestBody | undefined = {} as CosPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", cosPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(cosPostRequestBody.additionalData);
}
