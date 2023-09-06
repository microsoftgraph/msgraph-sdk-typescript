import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type VarAPostRequestBody } from './varAPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeVarAPostRequestBody(writer: SerializationWriter, varAPostRequestBody: VarAPostRequestBody | undefined = {} as VarAPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", varAPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(varAPostRequestBody.additionalData);
}
