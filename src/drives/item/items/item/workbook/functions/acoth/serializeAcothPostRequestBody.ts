import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {AcothPostRequestBody} from './acothPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAcothPostRequestBody(writer: SerializationWriter, acothPostRequestBody: AcothPostRequestBody | undefined = {} as AcothPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", acothPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(acothPostRequestBody.additionalData);
}
