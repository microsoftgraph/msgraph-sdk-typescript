import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {BitrshiftPostRequestBody} from './bitrshiftPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBitrshiftPostRequestBody(bitrshiftPostRequestBody: BitrshiftPostRequestBody | undefined = {} as BitrshiftPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { bitrshiftPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "shiftAmount": n => { bitrshiftPostRequestBody.shiftAmount = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
