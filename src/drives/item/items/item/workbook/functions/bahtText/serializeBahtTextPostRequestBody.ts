import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {BahtTextPostRequestBody} from './bahtTextPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBahtTextPostRequestBody(writer: SerializationWriter, bahtTextPostRequestBody: BahtTextPostRequestBody | undefined = {} as BahtTextPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", bahtTextPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(bahtTextPostRequestBody.additionalData);
}
