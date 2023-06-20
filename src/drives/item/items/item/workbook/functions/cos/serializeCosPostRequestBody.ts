import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CosPostRequestBody} from './cosPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCosPostRequestBody(cosPostRequestBody: CosPostRequestBody | undefined = {} as CosPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", cosPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(cosPostRequestBody.additionalData);
}
