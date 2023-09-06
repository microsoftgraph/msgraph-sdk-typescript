import { type Json } from '../../../../../../../../../../models/json';
import { serializeJson } from '../../../../../../../../../../models/serializeJson';
import { type SetPositionPostRequestBody } from './setPositionPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSetPositionPostRequestBody(writer: SerializationWriter, setPositionPostRequestBody: SetPositionPostRequestBody | undefined = {} as SetPositionPostRequestBody) : void {
        writer.writeObjectValue<Json>("endCell", setPositionPostRequestBody.endCell, serializeJson);
        writer.writeObjectValue<Json>("startCell", setPositionPostRequestBody.startCell, serializeJson);
        writer.writeAdditionalData(setPositionPostRequestBody.additionalData);
}
