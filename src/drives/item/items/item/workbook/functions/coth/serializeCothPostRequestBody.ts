import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {CothPostRequestBody} from './cothPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCothPostRequestBody(writer: SerializationWriter, cothPostRequestBody: CothPostRequestBody | undefined = {} as CothPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", cothPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(cothPostRequestBody.additionalData);
}
