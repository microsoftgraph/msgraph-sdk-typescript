import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Ecma_CeilingPostRequestBody} from './ecma_CeilingPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEcma_CeilingPostRequestBody(ecma_CeilingPostRequestBody: Ecma_CeilingPostRequestBody | undefined = {} as Ecma_CeilingPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { ecma_CeilingPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "significance": n => { ecma_CeilingPostRequestBody.significance = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
