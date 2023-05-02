import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImCosPostRequestBody} from './imCosPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImCosPostRequestBody(imCosPostRequestBody: ImCosPostRequestBody | undefined = {} as ImCosPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imCosPostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
