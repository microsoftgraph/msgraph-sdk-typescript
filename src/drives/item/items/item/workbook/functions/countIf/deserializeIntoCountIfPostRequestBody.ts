import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CountIfPostRequestBody} from './countIfPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCountIfPostRequestBody(countIfPostRequestBody: CountIfPostRequestBody | undefined = {} as CountIfPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "criteria": n => { countIfPostRequestBody.criteria = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "range": n => { countIfPostRequestBody.range = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
