import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ImSubPostRequestBody} from './imSubPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImSubPostRequestBody(imSubPostRequestBody: ImSubPostRequestBody | undefined = {} as ImSubPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber1": n => { imSubPostRequestBody.inumber1 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "inumber2": n => { imSubPostRequestBody.inumber2 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
