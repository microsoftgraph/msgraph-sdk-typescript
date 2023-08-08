import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {AreasPostRequestBody} from './areasPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAreasPostRequestBody(writer: SerializationWriter, areasPostRequestBody: AreasPostRequestBody | undefined = {} as AreasPostRequestBody) : void {
        writer.writeObjectValue<Json>("reference", areasPostRequestBody.reference, serializeJson);
        writer.writeAdditionalData(areasPostRequestBody.additionalData);
}
