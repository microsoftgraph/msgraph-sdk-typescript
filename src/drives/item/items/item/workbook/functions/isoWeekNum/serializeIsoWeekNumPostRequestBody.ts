import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {IsoWeekNumPostRequestBody} from './isoWeekNumPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIsoWeekNumPostRequestBody(writer: SerializationWriter, isoWeekNumPostRequestBody: IsoWeekNumPostRequestBody | undefined = {} as IsoWeekNumPostRequestBody) : void {
        writer.writeObjectValue<Json>("date", isoWeekNumPostRequestBody.date, serializeJson);
        writer.writeAdditionalData(isoWeekNumPostRequestBody.additionalData);
}
