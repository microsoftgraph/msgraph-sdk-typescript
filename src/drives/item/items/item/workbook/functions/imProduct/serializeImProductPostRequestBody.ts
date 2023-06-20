import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImProductPostRequestBody} from './imProductPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImProductPostRequestBody(imProductPostRequestBody: ImProductPostRequestBody | undefined = {} as ImProductPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("values", imProductPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(imProductPostRequestBody.additionalData);
}
