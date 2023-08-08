import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ImSinPostRequestBody} from './imSinPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImSinPostRequestBody(imSinPostRequestBody: ImSinPostRequestBody | undefined = {} as ImSinPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imSinPostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
