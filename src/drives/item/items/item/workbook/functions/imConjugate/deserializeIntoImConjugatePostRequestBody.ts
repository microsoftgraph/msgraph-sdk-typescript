import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ImConjugatePostRequestBody} from './imConjugatePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImConjugatePostRequestBody(imConjugatePostRequestBody: ImConjugatePostRequestBody | undefined = {} as ImConjugatePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imConjugatePostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
