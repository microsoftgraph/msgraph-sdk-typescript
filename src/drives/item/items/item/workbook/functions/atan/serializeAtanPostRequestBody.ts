import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {AtanPostRequestBody} from './atanPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAtanPostRequestBody(writer: SerializationWriter, atanPostRequestBody: AtanPostRequestBody | undefined = {} as AtanPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", atanPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(atanPostRequestBody.additionalData);
}
