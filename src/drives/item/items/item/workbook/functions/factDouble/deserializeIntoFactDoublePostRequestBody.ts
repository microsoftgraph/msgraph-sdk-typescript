import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {FactDoublePostRequestBody} from './factDoublePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFactDoublePostRequestBody(factDoublePostRequestBody: FactDoublePostRequestBody | undefined = {} as FactDoublePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { factDoublePostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
