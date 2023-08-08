import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {CodePostRequestBody} from './codePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCodePostRequestBody(codePostRequestBody: CodePostRequestBody | undefined = {} as CodePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "text": n => { codePostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
