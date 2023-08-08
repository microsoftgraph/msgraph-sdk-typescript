import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {AsinhPostRequestBody} from './asinhPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAsinhPostRequestBody(writer: SerializationWriter, asinhPostRequestBody: AsinhPostRequestBody | undefined = {} as AsinhPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", asinhPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(asinhPostRequestBody.additionalData);
}
