import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImCschPostRequestBody} from './imCschPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImCschPostRequestBody(imCschPostRequestBody: ImCschPostRequestBody | undefined = {} as ImCschPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imCschPostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
