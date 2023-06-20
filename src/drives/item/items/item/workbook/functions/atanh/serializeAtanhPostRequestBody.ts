import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AtanhPostRequestBody} from './atanhPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAtanhPostRequestBody(atanhPostRequestBody: AtanhPostRequestBody | undefined = {} as AtanhPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", atanhPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(atanhPostRequestBody.additionalData);
}
