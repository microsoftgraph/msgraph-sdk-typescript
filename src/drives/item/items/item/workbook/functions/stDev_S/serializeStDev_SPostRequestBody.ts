import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {StDev_SPostRequestBody} from './stDev_SPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStDev_SPostRequestBody(writer: SerializationWriter, stDev_SPostRequestBody: StDev_SPostRequestBody | undefined = {} as StDev_SPostRequestBody) : void {
        writer.writeObjectValue<Json>("values", stDev_SPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(stDev_SPostRequestBody.additionalData);
}
