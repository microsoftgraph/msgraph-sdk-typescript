import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {TrimMeanPostRequestBody} from './trimMeanPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTrimMeanPostRequestBody(writer: SerializationWriter, trimMeanPostRequestBody: TrimMeanPostRequestBody | undefined = {} as TrimMeanPostRequestBody) : void {
        writer.writeObjectValue<Json>("array", trimMeanPostRequestBody.array, serializeJson);
        writer.writeObjectValue<Json>("percent", trimMeanPostRequestBody.percent, serializeJson);
        writer.writeAdditionalData(trimMeanPostRequestBody.additionalData);
}
