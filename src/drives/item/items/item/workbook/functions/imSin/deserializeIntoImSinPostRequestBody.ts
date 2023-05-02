import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImSinPostRequestBody} from './imSinPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImSinPostRequestBody(imSinPostRequestBody: ImSinPostRequestBody | undefined = {} as ImSinPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imSinPostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
