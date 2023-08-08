import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {UnicharPostRequestBody} from './unicharPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnicharPostRequestBody(writer: SerializationWriter, unicharPostRequestBody: UnicharPostRequestBody | undefined = {} as UnicharPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", unicharPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(unicharPostRequestBody.additionalData);
}
