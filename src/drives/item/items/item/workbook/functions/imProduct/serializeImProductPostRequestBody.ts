import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ImProductPostRequestBody} from './imProductPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImProductPostRequestBody(writer: SerializationWriter, imProductPostRequestBody: ImProductPostRequestBody | undefined = {} as ImProductPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", imProductPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(imProductPostRequestBody.additionalData);
}
