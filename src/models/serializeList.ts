import { type ColumnDefinition } from './columnDefinition';
import { type ContentType } from './contentType';
import { type Drive } from './drive';
import { type List } from './list';
import { type ListInfo } from './listInfo';
import { type ListItem } from './listItem';
import { type RichLongRunningOperation } from './richLongRunningOperation';
import { serializeBaseItem } from './serializeBaseItem';
import { serializeColumnDefinition } from './serializeColumnDefinition';
import { serializeContentType } from './serializeContentType';
import { serializeDrive } from './serializeDrive';
import { serializeListInfo } from './serializeListInfo';
import { serializeListItem } from './serializeListItem';
import { serializeRichLongRunningOperation } from './serializeRichLongRunningOperation';
import { serializeSharepointIds } from './serializeSharepointIds';
import { serializeSubscription } from './serializeSubscription';
import { serializeSystemFacet } from './serializeSystemFacet';
import { type SharepointIds } from './sharepointIds';
import { type Subscription } from './subscription';
import { type SystemFacet } from './systemFacet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeList(writer: SerializationWriter, list: List | undefined = {} as List) : void {
        serializeBaseItem(writer, list)
        writer.writeCollectionOfObjectValues<ColumnDefinition>("columns", list.columns, serializeColumnDefinition);
        writer.writeCollectionOfObjectValues<ContentType>("contentTypes", list.contentTypes, serializeContentType);
        writer.writeStringValue("displayName", list.displayName);
        writer.writeObjectValue<Drive>("drive", list.drive, serializeDrive);
        writer.writeCollectionOfObjectValues<ListItem>("items", list.items, serializeListItem);
        writer.writeObjectValue<ListInfo>("list", list.list, serializeListInfo);
        writer.writeCollectionOfObjectValues<RichLongRunningOperation>("operations", list.operations, serializeRichLongRunningOperation);
        writer.writeObjectValue<SharepointIds>("sharepointIds", list.sharepointIds, serializeSharepointIds);
        writer.writeCollectionOfObjectValues<Subscription>("subscriptions", list.subscriptions, serializeSubscription);
        writer.writeObjectValue<SystemFacet>("system", list.system, serializeSystemFacet);
}
