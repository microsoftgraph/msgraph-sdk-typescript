import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ProductPostRequestBody} from './productPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProductPostRequestBody(writer: SerializationWriter, productPostRequestBody: ProductPostRequestBody | undefined = {} as ProductPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", productPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(productPostRequestBody.additionalData);
}
