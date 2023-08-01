import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {ImDivPostRequestBody} from './imDivPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImDivPostRequestBody(imDivPostRequestBody: ImDivPostRequestBody | undefined = {} as ImDivPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber1": n => { imDivPostRequestBody.inumber1 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "inumber2": n => { imDivPostRequestBody.inumber2 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
