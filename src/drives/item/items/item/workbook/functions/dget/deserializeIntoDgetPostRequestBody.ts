import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {DgetPostRequestBody} from './dgetPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDgetPostRequestBody(dgetPostRequestBody: DgetPostRequestBody | undefined = {} as DgetPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "criteria": n => { dgetPostRequestBody.criteria = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "database": n => { dgetPostRequestBody.database = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "field": n => { dgetPostRequestBody.field = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
