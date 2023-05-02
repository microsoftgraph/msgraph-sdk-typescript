import {createSiteFromDiscriminatorValue} from '../../models/createSiteFromDiscriminatorValue';
import {serializeSite} from '../../models/serializeSite';
import {Site} from '../../models/site';
import {AddPostRequestBody} from './addPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddPostRequestBody(addPostRequestBody: AddPostRequestBody | undefined = {} as AddPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { addPostRequestBody.value = n.getCollectionOfObjectValues<Site>(createSiteFromDiscriminatorValue); },
    }
}
