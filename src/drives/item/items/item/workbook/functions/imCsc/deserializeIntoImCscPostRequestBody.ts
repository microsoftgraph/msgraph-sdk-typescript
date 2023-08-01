import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ImCscPostRequestBody} from './imCscPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImCscPostRequestBody(imCscPostRequestBody: ImCscPostRequestBody | undefined = {} as ImCscPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imCscPostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
