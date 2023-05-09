import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {OddPostRequestBody} from './oddPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOddPostRequestBody(oddPostRequestBody: OddPostRequestBody | undefined = {} as OddPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { oddPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
