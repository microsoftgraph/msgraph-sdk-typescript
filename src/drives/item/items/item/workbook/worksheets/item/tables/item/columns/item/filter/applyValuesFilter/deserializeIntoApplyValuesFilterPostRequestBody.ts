import {createJsonFromDiscriminatorValue} from '../../../../../../../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../../../../../../../models/json';
import {serializeJson} from '../../../../../../../../../../../../../models/serializeJson';
import {ApplyValuesFilterPostRequestBody} from './applyValuesFilterPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApplyValuesFilterPostRequestBody(applyValuesFilterPostRequestBody: ApplyValuesFilterPostRequestBody | undefined = {} as ApplyValuesFilterPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { applyValuesFilterPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
