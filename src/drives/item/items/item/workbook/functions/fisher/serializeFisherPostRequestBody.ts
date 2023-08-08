import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {FisherPostRequestBody} from './fisherPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFisherPostRequestBody(writer: SerializationWriter, fisherPostRequestBody: FisherPostRequestBody | undefined = {} as FisherPostRequestBody) : void {
        writer.writeObjectValue<Json>("x", fisherPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(fisherPostRequestBody.additionalData);
}
