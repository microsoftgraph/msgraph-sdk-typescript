import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {LenPostRequestBody} from './lenPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLenPostRequestBody(lenPostRequestBody: LenPostRequestBody | undefined = {} as LenPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("text", lenPostRequestBody.text, serializeJson);
        writer.writeAdditionalData(lenPostRequestBody.additionalData);
}
