import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {TanhPostRequestBody} from './tanhPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTanhPostRequestBody(tanhPostRequestBody: TanhPostRequestBody | undefined = {} as TanhPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { tanhPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
