import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImArgumentPostRequestBody} from './imArgumentPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImArgumentPostRequestBody(writer: SerializationWriter, imArgumentPostRequestBody: ImArgumentPostRequestBody | undefined = {} as ImArgumentPostRequestBody) : void {
        writer.writeObjectValue<Json>("inumber", imArgumentPostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imArgumentPostRequestBody.additionalData);
}
