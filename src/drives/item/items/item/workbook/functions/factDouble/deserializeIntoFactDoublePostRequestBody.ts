import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {FactDoublePostRequestBody} from './factDoublePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFactDoublePostRequestBody(factDoublePostRequestBody: FactDoublePostRequestBody | undefined = {} as FactDoublePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { factDoublePostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
