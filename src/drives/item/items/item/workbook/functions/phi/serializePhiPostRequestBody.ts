import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {PhiPostRequestBody} from './phiPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePhiPostRequestBody(writer: SerializationWriter, phiPostRequestBody: PhiPostRequestBody | undefined = {} as PhiPostRequestBody) : void {
        writer.writeObjectValue<Json>("x", phiPostRequestBody.x, serializeJson);
        writer.writeAdditionalData(phiPostRequestBody.additionalData);
}
