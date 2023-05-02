import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CountBlankPostRequestBody} from './countBlankPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCountBlankPostRequestBody(writer: SerializationWriter, countBlankPostRequestBody: CountBlankPostRequestBody | undefined = {} as CountBlankPostRequestBody) : void {
        writer.writeObjectValue<Json>("range", countBlankPostRequestBody.range, serializeJson);
        writer.writeAdditionalData(countBlankPostRequestBody.additionalData);
}
