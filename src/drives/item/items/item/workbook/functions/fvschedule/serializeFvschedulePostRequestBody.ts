import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {FvschedulePostRequestBody} from './fvschedulePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFvschedulePostRequestBody(writer: SerializationWriter, fvschedulePostRequestBody: FvschedulePostRequestBody | undefined = {} as FvschedulePostRequestBody) : void {
        writer.writeObjectValue<Json>("principal", fvschedulePostRequestBody.principal, serializeJson);
        writer.writeObjectValue<Json>("schedule", fvschedulePostRequestBody.schedule, serializeJson);
        writer.writeAdditionalData(fvschedulePostRequestBody.additionalData);
}
