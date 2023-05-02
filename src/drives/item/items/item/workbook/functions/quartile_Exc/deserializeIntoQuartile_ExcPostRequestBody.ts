import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Quartile_ExcPostRequestBody} from './quartile_ExcPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoQuartile_ExcPostRequestBody(quartile_ExcPostRequestBody: Quartile_ExcPostRequestBody | undefined = {} as Quartile_ExcPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "array": n => { quartile_ExcPostRequestBody.array = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "quart": n => { quartile_ExcPostRequestBody.quart = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
