import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {DevSqPostRequestBody} from './devSqPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDevSqPostRequestBody(devSqPostRequestBody: DevSqPostRequestBody | undefined = {} as DevSqPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { devSqPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
