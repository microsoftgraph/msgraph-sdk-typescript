import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CotPostRequestBody} from './cotPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCotPostRequestBody(cotPostRequestBody: CotPostRequestBody | undefined = {} as CotPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", cotPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(cotPostRequestBody.additionalData);
}
