import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {MroundPostRequestBody} from './mroundPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMroundPostRequestBody(writer: SerializationWriter, mroundPostRequestBody: MroundPostRequestBody | undefined = {} as MroundPostRequestBody) : void {
        writer.writeObjectValue<Json>("multiple", mroundPostRequestBody.multiple, serializeJson);
        writer.writeObjectValue<Json>("number", mroundPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(mroundPostRequestBody.additionalData);
}
