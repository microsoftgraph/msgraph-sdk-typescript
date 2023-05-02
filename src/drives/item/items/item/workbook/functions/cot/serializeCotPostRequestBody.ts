import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CotPostRequestBody} from './cotPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCotPostRequestBody(writer: SerializationWriter, cotPostRequestBody: CotPostRequestBody | undefined = {} as CotPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", cotPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(cotPostRequestBody.additionalData);
}
