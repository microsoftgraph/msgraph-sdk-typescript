import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {SheetsPostRequestBody} from './sheetsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSheetsPostRequestBody(writer: SerializationWriter, sheetsPostRequestBody: SheetsPostRequestBody | undefined = {} as SheetsPostRequestBody) : void {
        writer.writeObjectValue<Json>("reference", sheetsPostRequestBody.reference, serializeJson);
        writer.writeAdditionalData(sheetsPostRequestBody.additionalData);
}
