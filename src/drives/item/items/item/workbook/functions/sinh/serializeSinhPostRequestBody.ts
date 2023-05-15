import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {SinhPostRequestBody} from './sinhPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSinhPostRequestBody(writer: SerializationWriter, sinhPostRequestBody: SinhPostRequestBody | undefined = {} as SinhPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", sinhPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(sinhPostRequestBody.additionalData);
}
