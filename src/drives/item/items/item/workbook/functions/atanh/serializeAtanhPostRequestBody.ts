import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {AtanhPostRequestBody} from './atanhPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAtanhPostRequestBody(writer: SerializationWriter, atanhPostRequestBody: AtanhPostRequestBody | undefined = {} as AtanhPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", atanhPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(atanhPostRequestBody.additionalData);
}
