import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DatevaluePostRequestBody} from './datevaluePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDatevaluePostRequestBody(writer: SerializationWriter, datevaluePostRequestBody: DatevaluePostRequestBody | undefined = {} as DatevaluePostRequestBody) : void {
        writer.writeObjectValue<Json>("dateText", datevaluePostRequestBody.dateText, serializeJson);
        writer.writeAdditionalData(datevaluePostRequestBody.additionalData);
}
