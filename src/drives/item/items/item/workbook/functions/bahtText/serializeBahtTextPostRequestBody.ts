import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {BahtTextPostRequestBody} from './bahtTextPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBahtTextPostRequestBody(bahtTextPostRequestBody: BahtTextPostRequestBody | undefined = {} as BahtTextPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", bahtTextPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(bahtTextPostRequestBody.additionalData);
}
