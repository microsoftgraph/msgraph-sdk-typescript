import { type Json } from '../../../../../../../models/json';
import { serializeJson } from '../../../../../../../models/serializeJson';
import { type SinhPostRequestBody } from './sinhPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSinhPostRequestBody(writer: SerializationWriter, sinhPostRequestBody: SinhPostRequestBody | undefined = {} as SinhPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", sinhPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(sinhPostRequestBody.additionalData);
}
