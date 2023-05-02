import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {RandBetweenPostRequestBody} from './randBetweenPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRandBetweenPostRequestBody(writer: SerializationWriter, randBetweenPostRequestBody: RandBetweenPostRequestBody | undefined = {} as RandBetweenPostRequestBody) : void {
        writer.writeObjectValue<Json>("bottom", randBetweenPostRequestBody.bottom, serializeJson);
        writer.writeObjectValue<Json>("top", randBetweenPostRequestBody.top, serializeJson);
        writer.writeAdditionalData(randBetweenPostRequestBody.additionalData);
}
