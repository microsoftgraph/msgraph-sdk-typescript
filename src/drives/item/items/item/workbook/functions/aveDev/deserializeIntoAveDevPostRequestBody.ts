import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AveDevPostRequestBody} from './aveDevPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAveDevPostRequestBody(aveDevPostRequestBody: AveDevPostRequestBody | undefined = {} as AveDevPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { aveDevPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
