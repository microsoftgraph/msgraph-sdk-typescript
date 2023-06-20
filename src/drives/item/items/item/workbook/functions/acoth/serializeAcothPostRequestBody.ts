import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AcothPostRequestBody} from './acothPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAcothPostRequestBody(acothPostRequestBody: AcothPostRequestBody | undefined = {} as AcothPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", acothPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(acothPostRequestBody.additionalData);
}
