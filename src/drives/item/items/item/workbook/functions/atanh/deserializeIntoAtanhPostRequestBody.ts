import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {AtanhPostRequestBody} from './atanhPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAtanhPostRequestBody(atanhPostRequestBody: AtanhPostRequestBody | undefined = {} as AtanhPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { atanhPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
