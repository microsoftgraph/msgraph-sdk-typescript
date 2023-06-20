import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AveDevPostRequestBody} from './aveDevPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAveDevPostRequestBody(aveDevPostRequestBody: AveDevPostRequestBody | undefined = {} as AveDevPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("values", aveDevPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(aveDevPostRequestBody.additionalData);
}
