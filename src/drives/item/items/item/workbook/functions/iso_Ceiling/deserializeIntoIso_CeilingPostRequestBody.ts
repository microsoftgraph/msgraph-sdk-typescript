import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {Iso_CeilingPostRequestBody} from './iso_CeilingPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIso_CeilingPostRequestBody(iso_CeilingPostRequestBody: Iso_CeilingPostRequestBody | undefined = {} as Iso_CeilingPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { iso_CeilingPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "significance": n => { iso_CeilingPostRequestBody.significance = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
