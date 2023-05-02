import {ItemBody} from './itemBody';
import {PostType} from './postType';
import {serializeItemBody} from './serializeItemBody';
import {ServiceHealthIssuePost} from './serviceHealthIssuePost';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceHealthIssuePost(writer: SerializationWriter, serviceHealthIssuePost: ServiceHealthIssuePost | undefined = {} as ServiceHealthIssuePost) : void {
        writer.writeDateValue("createdDateTime", serviceHealthIssuePost.createdDateTime);
        writer.writeObjectValue<ItemBody>("description", serviceHealthIssuePost.description, serializeItemBody);
        writer.writeStringValue("@odata.type", serviceHealthIssuePost.odataType);
        writer.writeEnumValue<PostType>("postType", serviceHealthIssuePost.postType);
        writer.writeAdditionalData(serviceHealthIssuePost.additionalData);
}
