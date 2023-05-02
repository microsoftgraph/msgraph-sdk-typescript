import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {CountAPostRequestBody} from './countAPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCountAPostRequestBody(countAPostRequestBody: CountAPostRequestBody | undefined = {} as CountAPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { countAPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
