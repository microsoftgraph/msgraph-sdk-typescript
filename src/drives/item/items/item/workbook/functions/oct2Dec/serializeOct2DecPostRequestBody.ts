import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Oct2DecPostRequestBody} from './oct2DecPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOct2DecPostRequestBody(writer: SerializationWriter, oct2DecPostRequestBody: Oct2DecPostRequestBody | undefined = {} as Oct2DecPostRequestBody) : void {
        writer.writeObjectValue<Json>("number", oct2DecPostRequestBody.number, serializeJson);
        writer.writeAdditionalData(oct2DecPostRequestBody.additionalData);
}
