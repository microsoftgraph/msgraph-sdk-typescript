import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {UnicharPostRequestBody} from './unicharPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnicharPostRequestBody(unicharPostRequestBody: UnicharPostRequestBody | undefined = {} as UnicharPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { unicharPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
