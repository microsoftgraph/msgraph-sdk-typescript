import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ErfCPostRequestBody} from './erfCPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeErfCPostRequestBody(writer: SerializationWriter, erfCPostRequestBody: ErfCPostRequestBody | undefined = {} as ErfCPostRequestBody) : void {
        writer.writeObjectValue<Json>("x", erfCPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(erfCPostRequestBody.additionalData);
}
