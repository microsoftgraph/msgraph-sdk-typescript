import {createSiteFromDiscriminatorValue} from '../../../../models/createSiteFromDiscriminatorValue';
import {serializeSite} from '../../../../models/serializeSite';
import type {Site} from '../../../../models/site';
import type {RemovePostRequestBody} from './removePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRemovePostRequestBody(removePostRequestBody: RemovePostRequestBody | undefined = {} as RemovePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { removePostRequestBody.value = n.getCollectionOfObjectValues<Site>(createSiteFromDiscriminatorValue); },
    }
}
