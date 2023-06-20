import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AcosPostRequestBody} from './acosPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAcosPostRequestBody(acosPostRequestBody: AcosPostRequestBody | undefined = {} as AcosPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("number", acosPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(acosPostRequestBody.additionalData);
}
