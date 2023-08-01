import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {MultiNomialPostRequestBody} from './multiNomialPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMultiNomialPostRequestBody(multiNomialPostRequestBody: MultiNomialPostRequestBody | undefined = {} as MultiNomialPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { multiNomialPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
