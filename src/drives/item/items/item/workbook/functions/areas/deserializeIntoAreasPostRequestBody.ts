import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AreasPostRequestBody} from './areasPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAreasPostRequestBody(areasPostRequestBody: AreasPostRequestBody | undefined = {} as AreasPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "reference": n => { areasPostRequestBody.reference = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
