import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {IsoWeekNumPostRequestBody} from './isoWeekNumPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIsoWeekNumPostRequestBody(isoWeekNumPostRequestBody: IsoWeekNumPostRequestBody | undefined = {} as IsoWeekNumPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("date", isoWeekNumPostRequestBody.date, serializeJson);
        writer.writeAdditionalData(isoWeekNumPostRequestBody.additionalData);
}
