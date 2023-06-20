import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Log10PostRequestBody} from './log10PostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLog10PostRequestBody(log10PostRequestBody: Log10PostRequestBody | undefined = {} as Log10PostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", log10PostRequestBody.number, serializeJson);
        writer.writeAdditionalData(log10PostRequestBody.additionalData);
}
