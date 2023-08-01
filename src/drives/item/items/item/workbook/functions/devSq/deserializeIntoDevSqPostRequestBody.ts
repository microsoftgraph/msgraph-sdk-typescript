import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {DevSqPostRequestBody} from './devSqPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDevSqPostRequestBody(devSqPostRequestBody: DevSqPostRequestBody | undefined = {} as DevSqPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { devSqPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
