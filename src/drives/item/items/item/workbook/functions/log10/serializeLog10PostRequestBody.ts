import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Log10PostRequestBody} from './log10PostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLog10PostRequestBody(writer: SerializationWriter, log10PostRequestBody: Log10PostRequestBody | undefined = {} as Log10PostRequestBody) : void {
        writer.writeObjectValue<Json>("number", log10PostRequestBody.number, serializeJson);
        writer.writeAdditionalData(log10PostRequestBody.additionalData);
}
