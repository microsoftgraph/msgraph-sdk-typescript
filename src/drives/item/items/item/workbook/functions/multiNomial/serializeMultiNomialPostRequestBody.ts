import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {MultiNomialPostRequestBody} from './multiNomialPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMultiNomialPostRequestBody(writer: SerializationWriter, multiNomialPostRequestBody: MultiNomialPostRequestBody | undefined = {} as MultiNomialPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", multiNomialPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(multiNomialPostRequestBody.additionalData);
}
