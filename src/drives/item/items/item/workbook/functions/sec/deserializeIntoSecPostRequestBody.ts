import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {SecPostRequestBody} from './secPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSecPostRequestBody(secPostRequestBody: SecPostRequestBody | undefined = {} as SecPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { secPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
