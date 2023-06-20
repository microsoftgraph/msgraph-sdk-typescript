import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {FisherPostRequestBody} from './fisherPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFisherPostRequestBody(fisherPostRequestBody: FisherPostRequestBody | undefined = {} as FisherPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("x", fisherPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(fisherPostRequestBody.additionalData);
}
