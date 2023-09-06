import { type Json } from '../../../../../../../../../../models/json';
import { serializeJson } from '../../../../../../../../../../models/serializeJson';
import { type SetDataPostRequestBody } from './setDataPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSetDataPostRequestBody(writer: SerializationWriter, setDataPostRequestBody: SetDataPostRequestBody | undefined = {} as SetDataPostRequestBody) : void {
        writer.writeStringValue("seriesBy", setDataPostRequestBody.seriesBy);
        writer.writeObjectValue<Json>("sourceData", setDataPostRequestBody.sourceData, serializeJson);
        writer.writeAdditionalData(setDataPostRequestBody.additionalData);
}
