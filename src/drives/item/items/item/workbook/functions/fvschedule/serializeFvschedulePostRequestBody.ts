import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type FvschedulePostRequestBody } from './fvschedulePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFvschedulePostRequestBody(writer: SerializationWriter, fvschedulePostRequestBody: FvschedulePostRequestBody | undefined = {} as FvschedulePostRequestBody) : void {
        writer.writeObjectValue<Json>("principal", fvschedulePostRequestBody.principal, serializeJson);
        writer.writeObjectValue<Json>("schedule", fvschedulePostRequestBody.schedule, serializeJson);
        writer.writeAdditionalData(fvschedulePostRequestBody.additionalData);
}
