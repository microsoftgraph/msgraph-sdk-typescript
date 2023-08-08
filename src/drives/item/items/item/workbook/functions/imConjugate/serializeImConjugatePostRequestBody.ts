import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ImConjugatePostRequestBody} from './imConjugatePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImConjugatePostRequestBody(writer: SerializationWriter, imConjugatePostRequestBody: ImConjugatePostRequestBody | undefined = {} as ImConjugatePostRequestBody) : void {
        writer.writeObjectValue<Json>("inumber", imConjugatePostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imConjugatePostRequestBody.additionalData);
}
