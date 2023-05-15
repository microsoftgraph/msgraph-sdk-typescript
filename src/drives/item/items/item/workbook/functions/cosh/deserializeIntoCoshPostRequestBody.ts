import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CoshPostRequestBody} from './coshPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCoshPostRequestBody(coshPostRequestBody: CoshPostRequestBody | undefined = {} as CoshPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { coshPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
