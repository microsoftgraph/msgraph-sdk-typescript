import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {MinPostRequestBody} from './minPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMinPostRequestBody(writer: SerializationWriter, minPostRequestBody: MinPostRequestBody | undefined = {} as MinPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", minPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(minPostRequestBody.additionalData);
}
