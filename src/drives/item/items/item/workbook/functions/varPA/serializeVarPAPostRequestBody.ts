import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type VarPAPostRequestBody } from './varPAPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeVarPAPostRequestBody(writer: SerializationWriter, varPAPostRequestBody: VarPAPostRequestBody | undefined = {} as VarPAPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", varPAPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(varPAPostRequestBody.additionalData);
}
