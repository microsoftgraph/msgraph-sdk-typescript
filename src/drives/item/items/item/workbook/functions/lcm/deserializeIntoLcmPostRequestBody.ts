import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {LcmPostRequestBody} from './lcmPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLcmPostRequestBody(lcmPostRequestBody: LcmPostRequestBody | undefined = {} as LcmPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { lcmPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
