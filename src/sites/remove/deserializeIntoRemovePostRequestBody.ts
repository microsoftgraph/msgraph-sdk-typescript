import {createSiteFromDiscriminatorValue} from '../../models/createSiteFromDiscriminatorValue';
import {serializeSite} from '../../models/serializeSite';
import {Site} from '../../models/site';
import {RemovePostRequestBody} from './removePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRemovePostRequestBody(removePostRequestBody: RemovePostRequestBody | undefined = {} as RemovePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { removePostRequestBody.value = n.getCollectionOfObjectValues<Site>(createSiteFromDiscriminatorValue); },
    }
}
