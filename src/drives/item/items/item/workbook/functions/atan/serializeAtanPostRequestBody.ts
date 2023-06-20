import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AtanPostRequestBody} from './atanPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAtanPostRequestBody(atanPostRequestBody: AtanPostRequestBody | undefined = {} as AtanPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", atanPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(atanPostRequestBody.additionalData);
}
