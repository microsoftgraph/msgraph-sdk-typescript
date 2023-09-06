import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type FisherInvPostRequestBody } from './fisherInvPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFisherInvPostRequestBody(writer: SerializationWriter, fisherInvPostRequestBody: FisherInvPostRequestBody | undefined = {} as FisherInvPostRequestBody) : void {
        writer.writeObjectValue<Json>("y", fisherInvPostRequestBody.y, serializeJson);
        writer.writeAdditionalData(fisherInvPostRequestBody.additionalData);
}
