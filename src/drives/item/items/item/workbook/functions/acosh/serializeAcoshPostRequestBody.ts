import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AcoshPostRequestBody} from './acoshPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAcoshPostRequestBody(writer: SerializationWriter, acoshPostRequestBody: AcoshPostRequestBody | undefined = {} as AcoshPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", acoshPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(acoshPostRequestBody.additionalData);
}
