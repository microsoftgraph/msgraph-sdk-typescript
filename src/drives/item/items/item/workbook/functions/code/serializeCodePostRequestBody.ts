import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CodePostRequestBody} from './codePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCodePostRequestBody(writer: SerializationWriter, codePostRequestBody: CodePostRequestBody | undefined = {} as CodePostRequestBody) : void {
        writer.writeObjectValue<Json>("text", codePostRequestBody.text, serializeJson);
        writer.writeAdditionalData(codePostRequestBody.additionalData);
}
