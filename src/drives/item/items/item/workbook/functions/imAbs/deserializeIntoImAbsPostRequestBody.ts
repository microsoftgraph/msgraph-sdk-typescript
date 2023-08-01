import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ImAbsPostRequestBody} from './imAbsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImAbsPostRequestBody(imAbsPostRequestBody: ImAbsPostRequestBody | undefined = {} as ImAbsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imAbsPostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
