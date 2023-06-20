import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImConjugatePostRequestBody} from './imConjugatePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImConjugatePostRequestBody(imConjugatePostRequestBody: ImConjugatePostRequestBody | undefined = {} as ImConjugatePostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<Json>("inumber", imConjugatePostRequestBody.inumber, serializeJson);
        writer.writeAdditionalData(imConjugatePostRequestBody.additionalData);
}
