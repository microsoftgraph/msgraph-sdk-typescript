import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CothPostRequestBody} from './cothPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCothPostRequestBody(cothPostRequestBody: CothPostRequestBody | undefined = {} as CothPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", cothPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(cothPostRequestBody.additionalData);
}
