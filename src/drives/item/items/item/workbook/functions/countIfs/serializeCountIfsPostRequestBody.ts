import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CountIfsPostRequestBody} from './countIfsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCountIfsPostRequestBody(countIfsPostRequestBody: CountIfsPostRequestBody | undefined = {} as CountIfsPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("values", countIfsPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(countIfsPostRequestBody.additionalData);
}
