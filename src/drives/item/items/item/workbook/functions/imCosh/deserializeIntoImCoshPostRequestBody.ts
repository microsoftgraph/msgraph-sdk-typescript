import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImCoshPostRequestBody} from './imCoshPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImCoshPostRequestBody(imCoshPostRequestBody: ImCoshPostRequestBody | undefined = {} as ImCoshPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imCoshPostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
