import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type NPostRequestBody } from './nPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeNPostRequestBody(writer: SerializationWriter, nPostRequestBody: NPostRequestBody | undefined = {} as NPostRequestBody) : void {
        writer.writeObjectValue<Json>("value", nPostRequestBody.value, serializeJson);
        writer.writeAdditionalData(nPostRequestBody.additionalData);
}
