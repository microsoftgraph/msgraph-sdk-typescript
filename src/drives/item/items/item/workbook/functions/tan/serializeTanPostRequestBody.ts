import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {TanPostRequestBody} from './tanPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTanPostRequestBody(writer: SerializationWriter, tanPostRequestBody: TanPostRequestBody | undefined = {} as TanPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", tanPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(tanPostRequestBody.additionalData);
}
