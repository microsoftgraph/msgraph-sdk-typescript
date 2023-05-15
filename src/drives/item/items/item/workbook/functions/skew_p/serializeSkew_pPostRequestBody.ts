import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Skew_pPostRequestBody} from './skew_pPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSkew_pPostRequestBody(writer: SerializationWriter, skew_pPostRequestBody: Skew_pPostRequestBody | undefined = {} as Skew_pPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", skew_pPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(skew_pPostRequestBody.additionalData);
}
