import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {LogPostRequestBody} from './logPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLogPostRequestBody(logPostRequestBody: LogPostRequestBody | undefined = {} as LogPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("base", logPostRequestBody.base, serializeJson);
        writer.writeObjectValue<Json>("number", logPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(logPostRequestBody.additionalData);
}
