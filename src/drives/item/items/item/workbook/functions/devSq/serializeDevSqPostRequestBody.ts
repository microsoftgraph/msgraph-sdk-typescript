import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type DevSqPostRequestBody } from './devSqPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDevSqPostRequestBody(writer: SerializationWriter, devSqPostRequestBody: DevSqPostRequestBody | undefined = {} as DevSqPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", devSqPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(devSqPostRequestBody.additionalData);
}
