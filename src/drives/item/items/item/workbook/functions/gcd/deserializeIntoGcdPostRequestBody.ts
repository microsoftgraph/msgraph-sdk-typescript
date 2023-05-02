import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {GcdPostRequestBody} from './gcdPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGcdPostRequestBody(gcdPostRequestBody: GcdPostRequestBody | undefined = {} as GcdPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { gcdPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
