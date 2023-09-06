import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type IsoWeekNumPostRequestBody } from './isoWeekNumPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIsoWeekNumPostRequestBody(writer: SerializationWriter, isoWeekNumPostRequestBody: IsoWeekNumPostRequestBody | undefined = {} as IsoWeekNumPostRequestBody) : void {
        writer.writeObjectValue<Json>("date", isoWeekNumPostRequestBody.date, serializeJson);
        writer.writeAdditionalData(isoWeekNumPostRequestBody.additionalData);
}
