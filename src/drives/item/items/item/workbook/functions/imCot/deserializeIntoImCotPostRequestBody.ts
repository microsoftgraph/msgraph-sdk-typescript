import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImCotPostRequestBody} from './imCotPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImCotPostRequestBody(imCotPostRequestBody: ImCotPostRequestBody | undefined = {} as ImCotPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imCotPostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
