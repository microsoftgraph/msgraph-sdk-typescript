import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {ItemBody} from './itemBody';
import {PostType} from './postType';
import {serializeItemBody} from './serializeItemBody';
import {ServiceHealthIssuePost} from './serviceHealthIssuePost';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceHealthIssuePost(serviceHealthIssuePost: ServiceHealthIssuePost | undefined = {} as ServiceHealthIssuePost) : Record<string, (node: ParseNode) => void> {
    return {
        "createdDateTime": n => { serviceHealthIssuePost.createdDateTime = n.getDateValue(); },
        "description": n => { serviceHealthIssuePost.description = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); },
        "@odata.type": n => { serviceHealthIssuePost.odataType = n.getStringValue(); },
        "postType": n => { serviceHealthIssuePost.postType = n.getEnumValue<PostType>(PostType); },
    }
}
