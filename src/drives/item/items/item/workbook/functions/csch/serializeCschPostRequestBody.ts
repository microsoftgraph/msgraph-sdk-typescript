import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CschPostRequestBody} from './cschPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCschPostRequestBody(cschPostRequestBody: CschPostRequestBody | undefined = {} as CschPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", cschPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(cschPostRequestBody.additionalData);
}
