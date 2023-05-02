import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AtanhPostRequestBody} from './atanhPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAtanhPostRequestBody(atanhPostRequestBody: AtanhPostRequestBody | undefined = {} as AtanhPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { atanhPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
