import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {CoshPostRequestBody} from './coshPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCoshPostRequestBody(coshPostRequestBody: CoshPostRequestBody | undefined = {} as CoshPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { coshPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
