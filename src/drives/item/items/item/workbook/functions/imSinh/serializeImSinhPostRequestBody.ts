import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ImSinhPostRequestBody} from './imSinhPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImSinhPostRequestBody(writer: SerializationWriter, imSinhPostRequestBody: ImSinhPostRequestBody | undefined = {} as ImSinhPostRequestBody) : void {
        writer.writeObjectValue<Json>("inumber", imSinhPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imSinhPostRequestBody.additionalData);
}
