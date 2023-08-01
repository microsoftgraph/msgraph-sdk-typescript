import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {NpvPostRequestBody} from './npvPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNpvPostRequestBody(writer: SerializationWriter, npvPostRequestBody: NpvPostRequestBody | undefined = {} as NpvPostRequestBody) : void {
        writer.writeObjectValue<Json>("rate", npvPostRequestBody.rate, serializeJson);
        writer.writeObjectValue<Json>("values", npvPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(npvPostRequestBody.additionalData);
}
