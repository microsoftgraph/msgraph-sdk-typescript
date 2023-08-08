import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {AveDevPostRequestBody} from './aveDevPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAveDevPostRequestBody(writer: SerializationWriter, aveDevPostRequestBody: AveDevPostRequestBody | undefined = {} as AveDevPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", aveDevPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(aveDevPostRequestBody.additionalData);
}
