import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Quartile_IncPostRequestBody} from './quartile_IncPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoQuartile_IncPostRequestBody(quartile_IncPostRequestBody: Quartile_IncPostRequestBody | undefined = {} as Quartile_IncPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "array": n => { quartile_IncPostRequestBody.array = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "quart": n => { quartile_IncPostRequestBody.quart = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
