import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DatevaluePostRequestBody} from './datevaluePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDatevaluePostRequestBody(datevaluePostRequestBody: DatevaluePostRequestBody | undefined = {} as DatevaluePostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("dateText", datevaluePostRequestBody.dateText, serializeJson);
        writer.writeAdditionalData(datevaluePostRequestBody.additionalData);
}
