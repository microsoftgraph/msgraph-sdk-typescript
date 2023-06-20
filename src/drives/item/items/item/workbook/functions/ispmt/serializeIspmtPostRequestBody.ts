import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {IspmtPostRequestBody} from './ispmtPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIspmtPostRequestBody(ispmtPostRequestBody: IspmtPostRequestBody | undefined = {} as IspmtPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("nper", ispmtPostRequestBody.nper, serializeJson);
        writer.writeObjectValue<Json>("per", ispmtPostRequestBody.per, serializeJson);
        writer.writeObjectValue<Json>("pv", ispmtPostRequestBody.pv, serializeJson);
        writer.writeObjectValue<Json>("rate", ispmtPostRequestBody.rate, serializeJson);
        writer.writeAdditionalData(ispmtPostRequestBody.additionalData);
}
