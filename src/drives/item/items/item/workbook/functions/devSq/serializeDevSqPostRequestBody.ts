import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DevSqPostRequestBody} from './devSqPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDevSqPostRequestBody(devSqPostRequestBody: DevSqPostRequestBody | undefined = {} as DevSqPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("values", devSqPostRequestBody.values, serializeJson);
        writer.writeAdditionalData(devSqPostRequestBody.additionalData);
}
