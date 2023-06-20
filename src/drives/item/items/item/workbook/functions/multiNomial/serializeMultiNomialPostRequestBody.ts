import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {MultiNomialPostRequestBody} from './multiNomialPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMultiNomialPostRequestBody(multiNomialPostRequestBody: MultiNomialPostRequestBody | undefined = {} as MultiNomialPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("values", multiNomialPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(multiNomialPostRequestBody.additionalData);
}
