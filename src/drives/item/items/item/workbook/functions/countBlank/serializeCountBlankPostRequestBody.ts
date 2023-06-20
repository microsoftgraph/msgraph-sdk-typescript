import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CountBlankPostRequestBody} from './countBlankPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCountBlankPostRequestBody(countBlankPostRequestBody: CountBlankPostRequestBody | undefined = {} as CountBlankPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("range", countBlankPostRequestBody.range, serializeJson);
        writer.writeAdditionalData(countBlankPostRequestBody.additionalData);
}
