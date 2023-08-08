import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {CscPostRequestBody} from './cscPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCscPostRequestBody(cscPostRequestBody: CscPostRequestBody | undefined = {} as CscPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { cscPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
