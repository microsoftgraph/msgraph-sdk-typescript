import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {AveDevPostRequestBody} from './aveDevPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAveDevPostRequestBody(aveDevPostRequestBody: AveDevPostRequestBody | undefined = {} as AveDevPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { aveDevPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
